export const MODULE_KEY = "universalProgressTracking";
export const MODULE_ID = "fvtt-progress-tracking";
export const LAUNCHER_CONTROL_BUTTON_NAME = MODULE_KEY;

export const MODULE_PATHS = {
  ROOT: `modules/${MODULE_ID}`,
  get SRC() {
    return `${this.ROOT}/src`;
  },
  get COMPONENTS() {
    return `${this.SRC}/components`;
  },
  get DASHBOARD_WINDOW() {
    return `${this.COMPONENTS}/dashboard-window`;
  },
  get DASHBOARD_WINDOW_TEMPLATE() {
    return `${this.DASHBOARD_WINDOW}/dashboard-window.html`;
  },
};
