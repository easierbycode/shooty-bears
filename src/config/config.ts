
import {Scene2} from '../scenes/Scene2';


export var config = {
    width: 256,
    height: 272,
    // plugins: {
    //     scene: [
    //         { key: 'phaserJuice', plugin: phaserJuice, mapping: 'juice' }
    //     ]
    // },
    scene: [Scene2],
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },

    canvasStyle: 'image-rendering: pixelated;'
};