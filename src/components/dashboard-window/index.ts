import { MODULE_ID, MODULE_PATHS } from "../../shared/constants";
import { I18N } from "../../shared/i18n.constants";
import {
  DashboardWindowAttributes,
  DashboardWindowData,
  EntityProgressTrack,
  ProgressEntity,
  ProgressTrackTemplate,
} from "./types";

const mockTemplate1 = new ProgressTrackTemplate({
  id: "template1",
  name: "Test 1",
});
const mockTemplate2 = new ProgressTrackTemplate({
  id: "template2",
  name: "Test 2",
});
const mockTemplate3 = new ProgressTrackTemplate({
  id: "template3",
  name: "Test 3",
});

const mockData: DashboardWindowData = new DashboardWindowData({
  trackTemplates: [mockTemplate1, mockTemplate2, mockTemplate3],
  entities: [
    new ProgressEntity({
      name: "Character 1",
      tracks: [
        new EntityProgressTrack({
          currentLevel: 1,
          maxLevel: 3,
          trackTemplate: mockTemplate1,
        }),
        new EntityProgressTrack({
          currentLevel: 3,
          maxLevel: 3,
          trackTemplate: mockTemplate2,
        }),
        new EntityProgressTrack({
          currentLevel: 2,
          maxLevel: 3,
          trackTemplate: mockTemplate3,
        }),
        new EntityProgressTrack({
          currentLevel: 2,
          maxLevel: 3,
          trackTemplate: mockTemplate3,
        }),
        new EntityProgressTrack({
          currentLevel: 2,
          maxLevel: 3,
          trackTemplate: mockTemplate3,
        }),
        new EntityProgressTrack({
          currentLevel: 2,
          maxLevel: 9,
          trackTemplate: mockTemplate3,
        }),
        new EntityProgressTrack({
          currentLevel: 2,
          maxLevel: 3,
          trackTemplate: mockTemplate3,
        }),
      ],
    }),
    new ProgressEntity({
      name: "Inventory 1",
      tracks: [
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate1,
        }),
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate2,
        }),
      ],
    }),
    new ProgressEntity({
      name: "Inventory 2",
      tracks: [
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate1,
        }),
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate2,
        }),
      ],
    }),
    new ProgressEntity({
      name: "Inventory 3",
      tracks: [
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate1,
        }),
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate2,
        }),
      ],
    }),
    new ProgressEntity({
      name: "Inventory 4",
      tracks: [
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate1,
        }),
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate2,
        }),
      ],
    }),
    new ProgressEntity({
      name: "Inventory 5",
      tracks: [
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate1,
        }),
        new EntityProgressTrack({
          maxLevel: 3,
          trackTemplate: mockTemplate2,
        }),
      ],
    }),
  ],
  displayMode: "cards",
});

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
      popOut: true,
      title: I18N.Title,
      width: 500,
    } as ApplicationOptions);
  }

  async getData(
    options?: Partial<FormApplicationOptions>
  ): Promise<Partial<DashboardWindowData> & FormApplication.Data<{}>> {
    return {
      ...(await super.getData()),
      trackTemplates: mockData.trackTemplates,
      entities: mockData.entities,
      displayMode: mockData.displayMode,
      getTrackTemplate: mockData.getTrackTemplate,
    };
  }

  protected _updateObject(
    event: Event,
    formData: object | undefined
  ): Promise<unknown> {
    return Promise.resolve(undefined);
  }
}
