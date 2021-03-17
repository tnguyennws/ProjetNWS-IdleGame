import Phaser from './lib/phaser.js'
import Village from './scenes/Village.js'

import MainScreen from './scenes/MainScreen.js'
import Game from './scenes/Game.js'


export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1340,
    height: 640,
    scene: [MainScreen, Village, Game],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
})

