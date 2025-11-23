import { BATTLE_BACKGROUND_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class BattleScene extends Phaser.Scene {
    constructor(){
        super({key:SCENE_KEYS.BATTLE_SCENE})
    }


    create(){
        console.log(`[${BattleScene.name}: create] invoked`);
        // the origin 0,0 by default is the center of the image so setOrigin sets 0,0 to top left and 1,1 bottom right
        this.add.image(0,0,BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0)
        // render the player and enemy monster
        this.add.image(768,144,MONSTER_ASSET_KEYS.CARNODUSK,0);
        this.add.image(256,316,MONSTER_ASSET_KEYS.IGUANIGNITE,0).setFlipX(true);
    }
}