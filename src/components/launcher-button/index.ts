import { progressTrackingModule } from "../..";
import { LAUNCHER_CONTROL_BUTTON_NAME } from "../../shared/constants";

/**
 * Adds the launcher button, which is the button located alongside
 * other scene tools, under the Journal Notes option.
 * In Foundry API's terms, this is a Scene Control tool button.
 */
export function appendLauncherButton(controls: SceneControl[]) {
  const notesControls = controls.find(({ name }) => name === "notes");

  if (!canvas || !notesControls?.hasOwnProperty("tools")) return;

  notesControls.tools.push({
    name: LAUNCHER_CONTROL_BUTTON_NAME,
    title: "UniversalProgressTracking.Title",
    icon: "fas fa-square-check",
    button: true,
    onClick: () => {
      progressTrackingModule.dashboardWindow.render(true);
    },
  });
}
