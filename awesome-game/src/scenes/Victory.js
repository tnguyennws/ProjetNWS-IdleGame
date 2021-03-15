import Phaser from '../lib/phaser.js'

export default class Victory extends Phaser.Scene
{
    constructor()
    {
        super('victory')
    }

    preload()
    {
        //load the audio
        this.load.audio('gg', 'assets/sfx/victory-sound-effect.ogg')

    }

    create()
    {
        const width = this.scale.width
        const height = this.scale.height
        
        this.add.text(width * 0.5, height * 0.5, 'VICTOIRE', {
        fontSize: 48
        })
        .setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.6, '(Space to Main Screen)', {
            fontSize: 30
            })
            .setOrigin(0.5)

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('main-screen')
            })

        this.sound.play('gg')
    }
}
