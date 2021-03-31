import Phaser from '../lib/phaser.js'

export default class Bibli extends Phaser.Scene
{    
    constructor()
    {
        super('bibliotheque')
    }

    preload()
    {
        this.load.image('forge', 'assets/forge.jpg')
        this.load.image('player', 'assets/hero-down-tp.png')
        this.load.image('hp', 'assets/hp.png')
        this.load.image('attack', 'assets/attack.jpg')
        this.load.image('def', 'assets/def.jpg')
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create()
    {
        this.add.image(500, 200, 'forge')
        .setScrollFactor(1, 0)

        this.player = this.physics.add.sprite(240, 320, 'player')
        .setScale(1.5)
        this.player.setCollideWorldBounds(true)
        

        //Placement d'une image cliquable pour augmenter les hp du hero
        var hp = this.add.image(150, 200, 'hp')
        .setScale(1)

        hp.setInteractive();

        hp.on('pointerdown', function () {
    
            
    
        }, this);


        //Placement d'une image cliquable pour augmenter l'attaque du hero
        var attack = this.add.image(400, 200, 'attack')
        .setScale(1)

        attack.setInteractive();

        
        attack.on('pointerdown', function () {
    
            
    
        }, this);


        //Placement d'une image cliquable pour augmenter la défense du hero
        var def = this.add.image(650, 200, 'def')
        .setScale(1)

        def.setInteractive();

        def.on('pointerdown', function () {
    
            
    
        }, this);

        // set the horizontal dead zone to 1.5x game width
        this.cameras.main.setDeadzone(this.scale.width * 1)

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('village')
            })
 
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