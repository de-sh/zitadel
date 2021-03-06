package admin

import (
	"github.com/caos/logging"
	iam_model "github.com/caos/zitadel/internal/iam/model"
	"github.com/caos/zitadel/pkg/grpc/admin"
	"github.com/golang/protobuf/ptypes"
)

func passwordLockoutPolicyToModel(policy *admin.DefaultPasswordLockoutPolicyRequest) *iam_model.PasswordLockoutPolicy {
	return &iam_model.PasswordLockoutPolicy{
		MaxAttempts:         policy.MaxAttempts,
		ShowLockOutFailures: policy.ShowLockoutFailure,
	}
}

func passwordLockoutPolicyFromModel(policy *iam_model.PasswordLockoutPolicy) *admin.DefaultPasswordLockoutPolicy {
	creationDate, err := ptypes.TimestampProto(policy.CreationDate)
	logging.Log("GRPC-4Gsm9f").OnError(err).Debug("date parse failed")

	changeDate, err := ptypes.TimestampProto(policy.ChangeDate)
	logging.Log("GRPC-3Gms9").OnError(err).Debug("date parse failed")

	return &admin.DefaultPasswordLockoutPolicy{
		MaxAttempts:        policy.MaxAttempts,
		ShowLockoutFailure: policy.ShowLockOutFailures,
		CreationDate:       creationDate,
		ChangeDate:         changeDate,
	}
}

func passwordLockoutPolicyViewFromModel(policy *iam_model.PasswordLockoutPolicyView) *admin.DefaultPasswordLockoutPolicyView {
	creationDate, err := ptypes.TimestampProto(policy.CreationDate)
	logging.Log("GRPC-7Hmlo").OnError(err).Debug("date parse failed")

	changeDate, err := ptypes.TimestampProto(policy.ChangeDate)
	logging.Log("GRPC-0oLgs").OnError(err).Debug("date parse failed")

	return &admin.DefaultPasswordLockoutPolicyView{
		MaxAttempts:        policy.MaxAttempts,
		ShowLockoutFailure: policy.ShowLockOutFailures,
		CreationDate:       creationDate,
		ChangeDate:         changeDate,
	}
}
