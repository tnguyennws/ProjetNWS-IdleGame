import Phaser from '../lib/phaser.js'

import Beacon from '../game/Beacon.js'
import Bomb from '../game/Bomb.js'

export default class Village extends Phaser.Scene
{

    beaconsCollected = 0
    healthPoint = 3

    /** @type {Phaser.Physics.Arcade.Sprite} */
    player

    /** @type {Phaser.Physics.Arcade.StaticGroup} */
    asteroid

    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors

    /** @type {Phaser.Physics.Arcade.Group} */
    beacons

    /** @type {Phaser.Physics.Arcade.Group} */
    bombs

    /**
    * @param {Phaser.GameObjects.Sprite} sprite
    */

    /** @type {Phaser.GameObjects.Text} */
    beaconsCollectedText

    /** @type {Phaser.GameObjects.Text} */
    healthPointText



    constructor()
    {
        super('village')
    }

    init()
    {
        
    }

    preload()
    {
        this.load.image('player', 'assets/hero-down.png')
        this.load.image('background', 'assets/background_mainscreen.jpg')

    }

    create()
    {

        // add a background image
        this.add.image(480, 320, 'background')
        .setScrollFactor(0, 0)

        this.hero = this.physics.add.sprite(700, 320, 'player')
        .setScale(0.5)
        game.physics.arcade.enable(this.hero);

        this.cursors = game.input.keyboard.createCursorKeys();

 
    }

    update(t, dt)
    {

        let vX = 0;
        let vY = 0;

        if (this.cursors.left.isDown)
        {
            vX = -200
        }
        if (this.cursors.right.isDown)
        {
            vX = 200
        }
        if (this.cursors.down.isDown)
        {
            vY = 200
        }
        if (this.cursors.up.isDown)
        {
            vY = -200
        }
        
        this.hero.setVelocityX(vX);
        this.hero.setVelocityY(vY);
    }





}