import Phaser from "./lib/phaser.js";
import { BattleScene } from "./scenes/battle-scene.js";
import { PreloadScene } from "./scenes/preload-scene.js";
import { SCENE_KEYS } from "./scenes/scene-keys.js";

const game = new Phaser.Game({
    type:Phaser.CANVAS,
    parent:'game-container',
    pixelArt: false, // true for piuxel art games
    backgroundColor:'#fbdea3',
    scale:{
        width:1024,
        height:576,
        mode:Phaser.Scale.FIT,// Scales the image to screen size
        autoCenter:Phaser.Scale.CENTER_BOTH, // centers canvas center horizontally and vertically
    }
});
// initialize object
game.scene.add(SCENE_KEYS.PRELOAD_SCENE,PreloadScene);
game.scene.add(SCENE_KEYS.BATTLE_SCENE,BattleScene);
// start loading the object
game.scene.start(SCENE_KEYS.PRELOAD_SCENE);