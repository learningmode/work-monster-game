import { BATTLE_ASSET_KEYS, BATTLE_BACKGROUND_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
    constructor(){
        super({
            key:SCENE_KEYS.PRELOAD_SCENE, // unique key used to reference scene throughout code
        });     
        console.log("preload scene");   
        console.log(PreloadScene.name);
        console.log("SCENE KEYS");
        console.log(SCENE_KEYS.PRELOAD_SCENE);
    }

    init(){
        console.log("init");
    }

    preload(){
        const monsterTamerAssetPath ='assets/images/monster-tamer';
        const kennysAssetPath ='assets/images/kenneys-assets';

        // battle backgrounds
        this.load.image(BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
            `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`);
        
        // battle assets
        this.load.image(BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
            `${kennysAssetPath}/ui-space-expansion/custom-ui.png`); 
        
        // health bar assets    
        this.load.image(HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
            `${kennysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`); 

        this.load.image(HEALTH_BAR_ASSET_KEYS.MIDDLE,
            `${kennysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`); 
        
        this.load.image(HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
            `${kennysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`);     
        
        // monster assests

        this.load.image(MONSTER_ASSET_KEYS.CARNODUSK,
            `${monsterTamerAssetPath}/monsters/carnodusk.png`); 
            
        this.load.image(MONSTER_ASSET_KEYS.IGUANIGNITE,
            `${monsterTamerAssetPath}/monsters/iguanignite.png`);  
    }

    create(){;
        console.log('CREATE');
        console.log(this.textures.get('BATTLE_BACKGROUND_ASSET_KEYS.FOREST'));
        // the origin 0,0 by default is the center of the image so setOrigin sets 0,0 to top left and 1,1 bottom right
        this.add.image(0,0,BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0)
    }

    update(){
        console.log('update');
    }

}
