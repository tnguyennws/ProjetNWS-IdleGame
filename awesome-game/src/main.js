import Phaser from './lib/phaser.js'
import Village from './scenes/Village.js'

import MainScreen from './scenes/MainScreen.js'


export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1340,
    height: 640,
    scene: [MainScreen, Village],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true
        }
    }
})