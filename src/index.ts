import { appendLauncherButton } from "./components/launcher-button";

console.warn(
  "Hello World! This code runs immediately when the file is loaded."
);

Hooks.on("init", function () {
  console.error(
    "This code runs once the Foundry VTT software begins its initialization workflow."
  );
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
