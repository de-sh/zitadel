package oidc

import (
	"encoding/json"
	"reflect"
	"sort"

	"github.com/caos/zitadel/internal/crypto"
	"github.com/caos/zitadel/internal/errors"
	"github.com/caos/zitadel/internal/eventstore/v2"
	"github.com/caos/zitadel/internal/eventstore/v2/repository"
)

type ConfigChangedEvent struct {
	eventstore.BaseEvent `json:"-"`

	IDPConfigID string `json:"idpConfigId"`

	ClientID     string              `json:"clientId"`
	ClientSecret *crypto.CryptoValue `json:"clientSecret"`
	Issuer       string              `json:"issuer"`
	Scopes       []string            `json:"scpoes"`

	IDPDisplayNameMapping MappingField `json:"idpDisplayNameMapping"`
	UserNameMapping       MappingField `json:"usernameMapping"`
}

func (e *ConfigChangedEvent) CheckPrevious() bool {
	return true
}

func (e *ConfigChangedEvent) Data() interface{} {
	return e
}

func NewConfigChangedEvent(
	base *eventstore.BaseEvent,
	current *ConfigWriteModel,
	clientID,
	issuer string,
	clientSecret *crypto.CryptoValue,
	idpDisplayNameMapping,
	userNameMapping MappingField,
	scopes ...string,
) (*ConfigChangedEvent, error) {

	event := &ConfigChangedEvent{
		BaseEvent:   *base,
		IDPConfigID: current.IDPConfigID,
	}
	hasChanged := false

	if clientID != "" && clientID != current.ClientID {
		event.ClientID = clientID
		hasChanged = true
	}

	if issuer != "" && issuer != current.Issuer {
		event.Issuer = issuer
		hasChanged = true
	}

	if clientSecret != nil && clientSecret != current.ClientSecret {
		event.ClientSecret = clientSecret
		hasChanged = true
	}

	if idpDisplayNameMapping.Valid() && idpDisplayNameMapping != current.IDPDisplayNameMapping {
		event.IDPDisplayNameMapping = idpDisplayNameMapping
		hasChanged = true
	}

	if userNameMapping.Valid() && userNameMapping != current.UserNameMapping {
		event.UserNameMapping = userNameMapping
		hasChanged = true
	}

	if len(scopes) > 0 {
		sort.Strings(scopes)
		sort.Strings(current.Scopes)
		if !reflect.DeepEqual(scopes, current.Scopes) {
			event.Scopes = scopes
			hasChanged = true
		}
	}

	if !hasChanged {
		return nil, errors.ThrowPreconditionFailed(nil, "OIDC-zPDOL", "Errors.NoChanges")
	}

	return event, nil
}

func ConfigChangedEventMapper(event *repository.Event) (eventstore.EventReader, error) {
	e := &ConfigChangedEvent{
		BaseEvent: *eventstore.BaseEventFromRepo(event),
	}

	err := json.Unmarshal(event.Data, e)
	if err != nil {
		return nil, errors.ThrowInternal(err, "OIDC-plaBZ", "unable to unmarshal event")
	}

	return e, nil
}