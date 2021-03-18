import Phaser from './lib/phaser.js'

import Village from './scenes/Village.js'
import Forge from './scenes/Forge.js'
import MainScreen from './scenes/MainScreen.js'
import Bibli from './scenes/Bibliotheque.js'
import Combat from './scenes/Castagne.js'


export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1340,
    height: 640,
    scene: [MainScreen, Village, Forge, Bibli, Combat],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
})

