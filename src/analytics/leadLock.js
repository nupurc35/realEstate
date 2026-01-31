export const canFireLead = () => {
  return !localStorage.getItem("lead_confirmed");
};

export const lockLead = () => {
  localStorage.setItem("lead_confirmed", "true");
};