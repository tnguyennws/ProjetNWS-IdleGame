import Phaser from '../lib/phaser.js'

export default class Forge extends Phaser.Scene
{    
    constructor()
    {
        super('forge')
    }

    preload()
    {
        // load the images
        this.load.image('background', 'assets/forge.jpg')

    }

    create()
    {

        // add a background image
        this.add.image(200, 200, 'background')
        .setScrollFactor(1, 0)

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('village')
            })
 
    }

}