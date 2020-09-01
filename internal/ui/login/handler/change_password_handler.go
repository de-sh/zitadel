package handler

import (
	"net/http"

	"github.com/caos/zitadel/internal/auth_request/model"
)

const (
	tmplChangePassword     = "PasswordChange"
	tmplChangePasswordDone = "PasswordChangeDone"
)

type changePasswordData struct {
	OldPassword             string `schema:"change-old-password"`
	NewPassword             string `schema:"change-new-password"`
	NewPasswordConfirmation string `schema:"change-password-confirmation"`
}

func (l *Login) handleChangePassword(w http.ResponseWriter, r *http.Request) {
	data := new(changePasswordData)
	authReq, err := l.getAuthRequestAndParseData(r, data)
	if err != nil {
		l.renderError(w, r, authReq, err)
		return
	}
	err = l.authRepo.ChangePassword(setContext(r.Context(), authReq.UserOrgID), authReq.UserID, data.OldPassword, data.NewPassword)
	if err != nil {
		l.renderChangePassword(w, r, authReq, err)
		return
	}
	l.renderChangePasswordDone(w, r, authReq)
}

func (l *Login) renderChangePassword(w http.ResponseWriter, r *http.Request, authReq *model.AuthRequest, err error) {
	data := passwordData{
		baseData:    l.getBaseData(r, authReq, "PasswordChange.Title", err),
		profileData: l.getProfileData(authReq),
	}
	policy, description, _ := l.getPasswordComplexityPolicy(r, authReq.UserOrgID)
	if policy != nil {
		data.PasswordPolicyDescription = description
		data.MinLength = policy.MinLength
		if policy.HasUppercase {
			data.HasUppercase = UpperCaseRegex
		}
		if policy.HasLowercase {
			data.HasLowercase = LowerCaseRegex
		}
		if policy.HasSymbol {
			data.HasSymbol = SymbolRegex
		}
		if policy.HasNumber {
			data.HasNumber = NumberRegex
		}
	}
	l.renderer.RenderTemplate(w, r, l.renderer.Templates[tmplChangePassword], data, nil)
}

func (l *Login) renderChangePasswordDone(w http.ResponseWriter, r *http.Request, authReq *model.AuthRequest) {
	data := l.getUserData(r, authReq, tmplChangePasswordDone, nil)
	l.renderer.RenderTemplate(w, r, l.renderer.Templates[tmplChangePasswordDone], data, nil)
}
