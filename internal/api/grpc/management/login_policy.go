package management

import (
	"context"
	"github.com/caos/zitadel/pkg/grpc/management"
	"github.com/golang/protobuf/ptypes/empty"
)

func (s *Server) GetLoginPolicy(ctx context.Context, _ *empty.Empty) (*management.LoginPolicyView, error) {
	result, err := s.org.GetLoginPolicy(ctx)
	if err != nil {
		return nil, err
	}
	return loginPolicyViewFromModel(result), nil
}

func (s *Server) GetDefaultLoginPolicy(ctx context.Context, _ *empty.Empty) (*management.LoginPolicyView, error) {
	result, err := s.org.GetDefaultLoginPolicy(ctx)
	if err != nil {
		return nil, err
	}
	return loginPolicyViewFromModel(result), nil
}

func (s *Server) CreateLoginPolicy(ctx context.Context, policy *management.LoginPolicyRequest) (*management.LoginPolicy, error) {
	result, err := s.org.AddLoginPolicy(ctx, loginPolicyRequestToModel(policy))
	if err != nil {
		return nil, err
	}
	return loginPolicyFromModel(result), nil
}

func (s *Server) UpdateLoginPolicy(ctx context.Context, policy *management.LoginPolicyRequest) (*management.LoginPolicy, error) {
	result, err := s.org.ChangeLoginPolicy(ctx, loginPolicyRequestToModel(policy))
	if err != nil {
		return nil, err
	}
	return loginPolicyFromModel(result), nil
}

func (s *Server) RemoveLoginPolicy(ctx context.Context, _ *empty.Empty) (*empty.Empty, error) {
	err := s.org.RemoveLoginPolicy(ctx)
	return &empty.Empty{}, err
}

func (s *Server) GetLoginPolicyIdpProviders(ctx context.Context, request *management.IdpProviderSearchRequest) (*management.IdpProviderSearchResponse, error) {
	result, err := s.org.SearchIDPProviders(ctx, idpProviderSearchRequestToModel(request))
	if err != nil {
		return nil, err
	}
	return idpProviderSearchResponseFromModel(result), nil
}

func (s *Server) AddIdpProviderToLoginPolicy(ctx context.Context, provider *management.IdpProviderAdd) (*management.IdpProvider, error) {
	result, err := s.org.AddIDPProviderToLoginPolicy(ctx, idpProviderAddToModel(provider))
	if err != nil {
		return nil, err
	}
	return idpProviderFromModel(result), nil
}

func (s *Server) RemoveIdpProviderFromLoginPolicy(ctx context.Context, provider *management.IdpProviderID) (*empty.Empty, error) {
	err := s.org.RemoveIDPProviderFromLoginPolicy(ctx, idpProviderToModel(provider))
	return &empty.Empty{}, err
}

func (s *Server) GetLoginPolicySecondFactors(ctx context.Context, _ *empty.Empty) (*management.SecondFactorsResult, error) {
	result, err := s.org.SearchSecondFactors(ctx)
	if err != nil {
		return nil, err
	}
	return secondFactorResultFromModel(result), nil
}

func (s *Server) AddSecondFactorToLoginPolicy(ctx context.Context, mfa *management.SecondFactor) (*management.SecondFactor, error) {
	result, err := s.org.AddSecondFactorToLoginPolicy(ctx, secondFactorTypeToModel(mfa))
	if err != nil {
		return nil, err
	}
	return secondFactorFromModel(result), nil
}

func (s *Server) RemoveSecondFactorFromLoginPolicy(ctx context.Context, mfa *management.SecondFactor) (*empty.Empty, error) {
	err := s.org.RemoveSecondFactorFromLoginPolicy(ctx, secondFactorTypeToModel(mfa))
	return &empty.Empty{}, err
}

func (s *Server) GetLoginPolicyMultiFactors(ctx context.Context, _ *empty.Empty) (*management.MultiFactorsResult, error) {
	result, err := s.org.SearchMultiFactors(ctx)
	if err != nil {
		return nil, err
	}
	return multiFactorResultFromModel(result), nil
}

func (s *Server) AddMultiFactorToLoginPolicy(ctx context.Context, mfa *management.MultiFactor) (*management.MultiFactor, error) {
	result, err := s.org.AddMultiFactorToLoginPolicy(ctx, multiFactorTypeToModel(mfa))
	if err != nil {
		return nil, err
	}
	return multiFactorFromModel(result), nil
}

func (s *Server) RemoveMultiFactorFromLoginPolicy(ctx context.Context, mfa *management.MultiFactor) (*empty.Empty, error) {
	err := s.org.RemoveMultiFactorFromLoginPolicy(ctx, multiFactorTypeToModel(mfa))
	return &empty.Empty{}, err
}
