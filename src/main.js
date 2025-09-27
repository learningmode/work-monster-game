import Phaser from "./lib/phaser.js";
import { PreloadScene } from "./scenes/preload-scene.js";
import { SCENE_KEYS } from "./scenes/scene-keys.js";

const game = new Phaser.Game({
    parent:'game-container',
});

game.scene.add(PreloadScene.name,PreloadScene);
game.scene.start(SCENE_KEYS.PRELOAD_SCENE);