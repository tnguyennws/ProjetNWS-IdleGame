import Phaser from "../../../lib/phaser.js";



//DUEL VS 1 MOB

export default class lv3 extends Phaser.Scene {

  constructor() {
    super("M1LV3");
  }

  init() {
    //duel1 est a l'état false quand un méchant sera vaincu il passera a true ce qui permet de passer au méchant suivant
    this.nbDuel = 10;


    this.attackSprite;
    //heroWIN va s'incrémenter de 1 a chaque fois qu'un méchant est vaincu une fois que heroWIN aura atteint une certaine valeur on lancera la scène de victoire !
    this.heroWIN = 0;

    //stats du héros
    this.hero = [];
    this.hero[0] = {     
        heroHP: 100,
        heroATK: 10,
        heroDEF: 3,
    };

    //creation du boss
    this.boss = [];
    this.boss[0] = {     
        bossHP: 40,
        bossATK: 10,
        bossDEF: 3,
    };
    //Création de 10 monstres
    this.monsters = [];
    for(let i = 0; i < 1; i++){
        this.monsters[i] = {    
            mobHP: 10,
            mobATK: 5,
            mobDEF: 2,
        };
    }

    this.nbMob = 0;

    //Gestion de données
    this.totalWins = localStorage.getItem('wins');
    this.totalLoses = localStorage.getItem('loses');
    this.gold = localStorage.getItem('gold');
  }
  

  preload() {
    
    this.load.image("glacier", "assets/glacier.jpg");
    this.load.image("player", "assets/hero-down-tp.png");
    this.load.image("ghost3", "assets/ghost3.png");
    this.load.image("mob", "assets/elec.jpg");
    this.load.image('poo', 'assets/sprites/poo.png');

    this.load.image('hero', 'assets/hero-left.png');
  }
  onYoyoHandler (tween, target)
  {
    console.log(arguments);

    target.toggleFlipX().setAlpha(0.2 + Math.random());
  }

  create() {
    //ajout du background
      this.add.image(500, 200, "glacier").setScrollFactor(1, 0);




    //ajout de l'image du hero
    
   

    // set the horizontal dead zone to 1.5x game width
    this.cameras.main.setDeadzone(this.scale.width * 1);

    // si la touche "espace" est appuyé alors on lance la scène du "village"
    this.input.keyboard.once("keydown-SPACE", () => {
      this.scene.start("village");
    });
    
  }

  update() {

    
    while(this.nbDuel > 0 && this.hero[0].heroHP > 0){
        this.endDuel = false;



        while(this.endDuel == false){

        //Le héros attaque        var marker = this.add.image(100, 100, 'hero').setAlpha(0.3);
        var image = this.add.image(100, 100, 'hero');
    
        var tween = this.tweens.add({
            targets: image,
            x: 600,
            ease: 'Power1',
            duration: 3000,
            yoyo: true,
            repeat: 0,
            onStart: function () { console.log('onStart'); console.log(arguments); },
            onComplete: function () { console.log('onComplete'); console.log(arguments); },
            onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
            onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
        });
        this.monsters[this.nbMob].mobHP -= this.hero[0].heroATK - this.monsters[this.nbMob].mobDEF;
        console.log("PDV du monstre " + this.nbMob + " : " + this.monsters[this.nbMob].mobHP);

            if(this.monsters[this.nbMob].mobHP <= 0){
                console.log("Le monstre est mort");
                console.log("Combat suivant");

                this.heroWIN++;
                this.totalWins++;
                localStorage.setItem('win', this.totalWins);
                this.nbMob++;
                this.nbDuel--;
                this.endDuel = true;
            }else{
                this.hero[0].heroHP -= this.monsters[this.nbMob].mobATK - this.hero[0].heroDEF;
                console.log("PDV du hero :" + this.hero[0].heroHP);

                if(this.hero[0].heroHP > 0){
                    console.log("Round suivant");
                }else{
                    console.log("Le héros est mort");
                    this.endDuel = true;
                    
                }
            }


        
    }
    

  }    
  
  



  }
  

}

const config = {
  type: Phaser.AUTO,
  
  width:0,
  height:0,
  pixelArt: true,
  scene: [ lv3 ]
};
