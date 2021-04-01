import Phaser from './lib/phaser.js'

import Village from './scenes/Village.js'
import Forge from './scenes/Forge.js'
import MainScreen from './scenes/MainScreen.js'
import Bibli from './scenes/Bibliotheque.js'
import Aventure from './scenes/Aventure.js'
import lv1 from './scenes/M1LV1.js'
import lv2 from './scenes/M1LV2.js'


export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1340,
    height: 640,
    scene: [MainScreen, Village, Forge, Bibli, Aventure, lv1, lv2],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
})

