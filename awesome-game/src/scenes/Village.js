import Phaser from '../lib/phaser.js'

export default class Village extends Phaser.Scene
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
        this.load.image('village', 'assets/background_village.png')
        this.load.image('player', 'assets/hero-down-tp.png')
        this.load.image('pnj', 'assets/ghost3.png')

        //load the audio

        // load the cursor
        this.cursors = this.input.keyboard.createCursorKeys()

    }

    create()
    {

        // add a background image
        this.add.image(200, 200, 'village')
        .setScrollFactor(1, 0)
        .setScale(3)

        var pnj1 = this.add.image(150, 200, 'pnj')
        .setScale(1)

        var pnj2 = this.add.image(630, 200, 'pnj')
        .setScale(1)

        pnj1.setInteractive();
        pnj2.setInteractive();

        pnj1.on('pointerdown', function () {
    
            this.scene.start('bibliotheque')
    
        }, this);

        pnj2.on('pointerdown', function () {
    
            this.scene.start('M1LV1')
    
        }, this);

        this.player = this.physics.add.sprite(240, 320, 'player')
        .setScale(1.5)
        this.player.setCollideWorldBounds(true)
        
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