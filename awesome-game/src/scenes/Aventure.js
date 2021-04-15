import Phaser from '../lib/phaser.js'

export default class Aventure extends Phaser.Scene
{    
    
    heroHP = 15;
    heroATK = 10;
    heroDEF = 5;

    SkeHP = 10;
    SkeATK = 5;
    SkeDEF = 2;

    constructor()
    {
        super('combat')
    }

    init(){
        this.heroHP = 15;
        this.heroATK = 10;
        this.heroDEF = 3;
        this.degatHero = 0;
    
        this.SkeHP = 10;
        this.SkeATK = 5;
        this.SkeDEF = 2;
        this.degatSke = 0;
       
        
    }

    preload()
    {
        this.load.image('glacier', 'assets/glacier.jpg')
        this.load.image('player', 'assets/hero-down-tp.png')

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create()
    {
        this.add.image(500, 200, 'glacier')
        .setScrollFactor(1, 0)

        this.player = this.physics.add.sprite(240, 320, 'player')
        .setScale(1.5)
        this.player.setCollideWorldBounds(true)
        
        // set the horizontal dead zone to 1.5x game width
        this.cameras.main.setDeadzone(this.scale.width * 1)

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('village')
            })
 
    }

    update(t, dt)
    {

        if(this.heroHP > 0 && this.SkeHP > 0){
            if(this.heroHP > 0){
                
                this.player.setVelocityX(200)
                this.time.addEvent({
                    delay: 1000,
                    callback: ()=>{
                        
                        this.degatHero = this.heroATK - this.SkeDEF;
                        console.log('Degat du hero' ,this.degatHero);
                        
                        this.player.setVelocityX(0)
                        this.player.setVelocityX(-200)
                        this.time.addEvent({
                            delay: 1000,
                            callback: ()=>{
                                
                               
                                this.player.setVelocityX(0)
                            },
                            loop: true
                        })
                        
                    },
                    loop: true
                })
 
                this.degatHero = this.heroATK - this.SkeDEF;
                
                this.SkeHP = this.SkeHP - this.degatHero; 
 
                this.time.addEvent({
                    delay: 2000,
                    callback: ()=>{
                        
                       
                        this.SkeHP = this.SkeHP - this.degatHero; 
                    },
                    loop: true
                })
                
            }
            
            console.log('PV du hero' ,this.heroHP);
            console.log('PV du ske' ,this.SkeHP);
            if(this.SkeHP > 0){

                this.degatSke = this.SkeATK - this.heroDEF; 
                this.heroHP = this.heroHP - this.degatSke;
                console.log('Degat du ske' ,this.degatSke);
                console.log('PV du hero apres attaque' ,this.heroHP);
                
            }
    
        }
        else{
            if(this.SkeHP <= 0){
                console.log('Ske a perdu')
                this.SkeHP = "a"
                

            }   
            
            if(this.heroHP <= 0){
                console.log('Hero a perdu ')
            }
        }



 
    }


}

