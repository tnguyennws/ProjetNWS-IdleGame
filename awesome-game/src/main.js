import Phaser from './lib/phaser.js'
import Game from './scenes/Game.js'
import GameOver from './scenes/GameOver.js'
import MainScreen from './scenes/MainScreen.js'
import Victory from './scenes/Victory.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1340,
    height: 640,
    scene: [MainScreen, Game, GameOver, Victory],
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