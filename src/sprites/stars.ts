
import Phaser from 'phaser'
import { config } from '../config/config'


export default class Stars {
    constructor({ scene, x=0, y=0 }) {
        var colors = [0x72747D, 0x3C3E45, 0xe5e7f0, 0xafb1b8, 0xff0099, 0xf3f315, 0x83f52c, 0x630dd0];
        
        var rect = new Phaser.Geom.Rectangle( 0, 0, config.width, config.height )
        
        let particleConfig: Phaser.Types.GameObjects.Particles.ParticleEmitterConfig = {
            alpha           : {
                onUpdate    : (particle: Phaser.GameObjects.Particles.Particle, key: string, t: number, value: number) => {
                    return Phaser.Math.Between( 0.75, 0.85 )
                }
            },
            bounds          : rect,
            collideBottom   : false,
            frequency       : 100,
            lifespan        : 6000,
            speedY  : {
                min : 60,
                max : 100
            },
            tint    : {
                onUpdate    : (particle: Phaser.GameObjects.Particles.Particle, key: string, value: number) => {
                    return Phaser.Utils.Array.GetRandom( colors );
                }
            },
            x       : {
                random      : [0, config.width]
            }
        }

        scene.add.particles( x, y, 'star', particleConfig )
    }
}