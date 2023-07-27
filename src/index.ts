import { DashboardWindow } from "./components/dashboard-window";
import { appendLauncherButton } from "./components/launcher-button";
import { MODULE_KEY } from "./shared/constants";
import "./shared/handlebars-helpers";

class FvttProgressTrackingModule {
  private get data() {
    return (window as any)[MODULE_KEY];
  }

  private set data(value: any) {
    (window as any)[MODULE_KEY] = value;
  }

  get dashboardWindow() {
    return this.data.dashboardWindow;
  }

  constructor() {
    this.data = {
      dashboardWindow: new DashboardWindow(),
    };
  }
}

export let progressTrackingModule: FvttProgressTrackingModule;

Hooks.on("init", function () {
  progressTrackingModule = new FvttProgressTrackingModule();
});

Hooks.on("ready", function () {
  console.error(
    "This code runs once core initialization is ready and game data is available."
  );
});

/**
 * Adds the launcher button, which is the button located alongside
 * other scene tools, under the Journal Notes option.
 * In Foundry API's terms, this is a Scene Control tool button.
 */
Hooks.on("getSceneControlButtons", function (controls: SceneControl[]) {
  appendLauncherButton(controls);
});
