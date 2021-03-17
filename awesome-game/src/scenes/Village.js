import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene
{
    /** @type {Phaser.Physics.Arcade.Sprite} */
    player

    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors
    
    constructor()
    {
        super('village')
    }

    preload()
    {
        // load the images
        this.load.image('background', 'assets/background_village.png')

        this.load.image('player', 'assets/hero-down.png')

        //load the audio

        // load the cursor
        this.cursors = this.input.keyboard.createCursorKeys()

    }

    create()
    {

        // add a background image
        this.add.image(480, 320, 'background')
        .setScrollFactor(1, 0)

        this.player = this.physics.add.sprite(240, 320, 'player')
        .setScale(2)
        
        // set the horizontal dead zone to 1.5x game width
        this.cameras.main.setDeadzone(this.scale.width * 1)
 
    }

    update(t, dt)
    {
        // left and right input logic
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-200)
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(200)
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(200)
        }
        else if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-200)
        }
        else
        {
            // stop movement if not left or right
            this.player.setVelocityX(0)
            this.player.setVelocityY(0)
        }
    }
}