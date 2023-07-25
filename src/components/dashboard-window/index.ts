import { MODULE_ID, MODULE_PATHS } from "../../shared/constants";
import { I18N } from "../../shared/i18n.constants";

export class DashboardWindow extends FormApplication {
  private static COMPONENT_ID = `${MODULE_ID}-dashboard-window`;

  constructor() {
    super({});
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: DashboardWindow.COMPONENT_ID,
      classes: [MODULE_ID],
      template: MODULE_PATHS.DASHBOARD_WINDOW_TEMPLATE,
      minimizable: true,
      resizable: true,
      title: I18N.Title,
    });
  }

  protected _updateObject(
    event: Event,
    formData: object | undefined
  ): Promise<unknown> {
    return Promise.resolve(undefined);
  }
}
