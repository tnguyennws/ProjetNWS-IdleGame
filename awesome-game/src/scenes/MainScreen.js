import Phaser from '../lib/phaser.js'

export default class MainScreen extends Phaser.Scene
{
    constructor()
    {
        super('main-screen')
    }

    preload()
    {
        this.load.image('background', 'assets/background1.png');
        this.load.image('space-ship', 'assets/ship1.png')
    }

    create()
    {
        const width = this.scale.width
        const height = this.scale.height

        // add a background image
        this.add.image(480, 320, 'background')
        .setScrollFactor(1, 0)


        
        
        this.add.text(width * 0.5, height * 0.5, 'Bienvenu dans Idle Blades', {
        fontSize: 32
        })
        .setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.6, 'Appuyer sur espace pour commencer a jouer !!!', {
            fontSize: 30
            })
            .setOrigin(0.5)

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('game')
            })
    }
}
