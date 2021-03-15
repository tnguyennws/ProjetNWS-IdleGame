import Phaser from '../lib/phaser.js'

import Beacon from '../game/Beacon.js'
import Bomb from '../game/Bomb.js'

export default class Game extends Phaser.Scene
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
        super('game')
    }

    init()
    {
        
    }

    preload()
    {
        this.load.image('space-ship', 'assets/ship1.png')
    }

    create()
    {

        // add a background image
        this.add.image(480, 320, 'background')
        .setScrollFactor(0, 0)
        
        this.player = this.physics.add.sprite(240, 320, 'space-ship')
        .setScale(0.5)

        this.input.on('space-ship',this.onObjectClicked);
 
    }
    onObjectClicked()
    {
        this.scene.start('game-over')
    }

    update(t, dt)
    {

        if(this.beaconsCollected > 5)
        {
            this.scene.start('victory')
        }

        if(this.healthPoint == 0)
        {
            this.scene.start('game-over')
        }

     
    }





}