import { trackEvent } from "../analytics/ga4";
import { canFireLead, lockLead } from "../analytics/leadLock";

export const confirmLead = (source) => {
  if (!canFireLead()) return;
  trackEvent("lead_confirmed", { source });
  lockLead();
};