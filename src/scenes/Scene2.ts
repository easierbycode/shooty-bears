
import Phaser from 'phaser'
import star from '../assets/star.png'
import Stars from "../sprites/stars"


export class Scene2 extends Phaser.Scene {
    constructor() {
        super('playGame'); 
    }

    preload() {
        this.load.image( 'star', star )
    }

    create() {
        new Stars({ scene: this })
    }
}