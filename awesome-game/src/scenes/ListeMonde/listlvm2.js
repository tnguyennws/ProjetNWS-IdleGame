import Phaser from '../../lib/phaser.js'

export default class ListLvM2 extends Phaser.Scene
{    
    constructor()
    {
        super('listlevelm2')
    }

    preload()
    {
        this.load.image('forge', 'assets/forge.jpg')
        this.load.image('usine', 'assets/usine.jpg')
        this.load.image('volcan', 'assets/volcan.jpg')
        this.load.image('player', 'assets/hero-down-tp.png')
        this.load.image('hp', 'assets/hp.png')
        this.load.image('attack', 'assets/attack.jpg')
        this.load.image('def', 'assets/def.jpg')
        this.load.image("robot", "assets/robot.jpg");
        this.load.image("feu", "assets/feu.jpg");
        this.load.image("plante", "assets/plante.jpg");
        this.load.image("glace", "assets/monstreglace.jpg");
        this.load.image("lvrobot", "assets/lvrobot.png");
        this.load.image("lvfeu", "assets/monstrefeu.jpg");
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create()
    {
        this.add.image(500, 200, 'volcan')
        .setScrollFactor(1, 0)

        this.player = this.physics.add.sprite(240, 320, 'player')
        .setScale(1.5)
        this.player.setCollideWorldBounds(true)
        

        var lvfeu = this.add.image(400, 200, "lvfeu").setScale(1);

        lvfeu.setInteractive();

        lvfeu.on(
            "pointerdown",
            function() {
              this.scene.start("M2LV2");
            },
            this
        );

        var lvfeu = this.add.image(150, 200, "lvfeu").setScale(1);

        lvfeu.setInteractive();

        lvfeu.on(
            "pointerdown",
            function() {
              this.scene.start("M2LV1");
            },
            this
        );

        
        var lvfeu = this.add.image(650, 200, "lvfeu").setScale(1);

        lvfeu.setInteractive();

        lvfeu.on(
            "pointerdown",
            function() {
              this.scene.start("M2LV3");
            },
            this
        );

        var lvfeu = this.add.image(900, 200, "lvfeu").setScale(1);

        lvfeu.setInteractive();

        lvfeu.on(
            "pointerdown",
            function() {
              this.scene.start("M2LV4");
            },
            this
        );
 
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