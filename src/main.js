import Phaser from "./lib/phaser.js";
import { PreloadScene } from "./scenes/preload-scene.js";
import { SCENE_KEYS } from "./scenes/scene-keys.js";

const game = new Phaser.Game({
    parent:'game-container',
});
// initialize object
game.scene.add(SCENE_KEYS.PRELOAD_SCENE,PreloadScene);
// start loading the object
game.scene.start(SCENE_KEYS.PRELOAD_SCENE);