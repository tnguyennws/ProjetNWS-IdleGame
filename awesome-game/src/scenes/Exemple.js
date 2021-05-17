import Phaser from "../lib/phaser.js";

export default class Exemple extends Phaser.Scene 
{
    constructor ()
    {
        super("Exemple");
    }

    preload ()
    {
        this.load.image('poo', 'assets/sprites/poo.png');
        this.load.spritesheet('mummy', 'assets/animations/mummy37x45.png', { frameWidth: 37, frameHeight: 45 });
    }

    create ()
    {
        const mummyAnimation = this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('mummy'),
            frameRate: 16
        });

        const sprite = this.add.sprite(50, 300, 'mummy').setScale(4);

        sprite.play({ key: 'walk', repeat: 7 });

        this.tweens.add({
            targets: sprite,
            x: 750,
            duration: 8800,
            ease: 'Linear'
        });

        


    }
}

const config = {
    type: Phaser.AUTO,
    
    width:0,
    height:0,
    pixelArt: true,
    scene: [ Exemple ]
};

const game = new Phaser.Game(config);