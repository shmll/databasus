import { RestoreVerificationStatus } from '../../../entity/backups';

// NOT_VERIFIED is intentionally absent: a lookup miss is how the UI decides to
// render no tag at all for backups that were never restore-verified.
export const RESTORE_VERIFICATION_STATUS_COLORS: Partial<
  Record<RestoreVerificationStatus, string>
> = {
  [RestoreVerificationStatus.VERIFIED_SUCCESSFUL]: 'green',
  [RestoreVerificationStatus.VERIFICATION_FAILED]: 'red',
};

export const RESTORE_VERIFICATION_STATUS_LABELS: Partial<
  Record<RestoreVerificationStatus, string>
> = {
  [RestoreVerificationStatus.VERIFIED_SUCCESSFUL]: 'Verified',
  [RestoreVerificationStatus.VERIFICATION_FAILED]: 'Verification failed',
};
