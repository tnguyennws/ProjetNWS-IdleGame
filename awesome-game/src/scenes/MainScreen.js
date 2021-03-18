import Phaser from '../lib/phaser.js'

export default class MainScreen extends Phaser.Scene
{
    constructor()
    {
        super('main-screen')
    }

    preload()
    {
        this.load.image('background', 'assets/background_mainscreen.jpg')
        this.load.image('titre', 'assets/titre.png')
        this.load.image('bouton-jouer', 'assets/bouton-jouer.png')
        this.load.image('bouton-stats', 'assets/bouton-statistiques.png')
    }

    create()
    {
        const width = this.scale.width
        const height = this.scale.height

        // add a background image
        this.add.image(480, 320, 'background')
        .setScrollFactor(1, 0) 
        
        this.add.image(670, 150, 'titre')
        .setScale(1.2)

        var bouton_jouer = this.add.image(670, 350, 'bouton-jouer')    
        
        bouton_jouer.setInteractive()

        bouton_jouer.on('pointerdown', function () {
    
            this.scene.start('village')
    
        }, this);

        var bouton_stats = this.add.image(670, 450, 'bouton-stats') 

        /*this.add.text(width * 0.5, height * 0.3, 'Bienvenue dans Idle Blade', {
        fontSize: 32,
        color: '#000000'
        })
        .setOrigin(0.5)

        this.add.text(width * 0.5, height * 0.75, 'Appuyer sur espace pour commencer à jouer !!!', {
            fontSize: 30,
            color: '#000000'
            })
            .setOrigin(0.5)*/

        /*this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('village')
            })*/
    }
}
