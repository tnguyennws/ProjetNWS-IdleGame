import Phaser from "../lib/phaser.js";

export default class lv1 extends Phaser.Scene {

  constructor() {
    super("M1LV1");
  }

  init() {
    //duel1 est a l'état false quand un méchant sera vaincu il passera a true ce qui permet de passer au méchant suivant
    this.nbDuel = 10;

    //heroWIN va s'incrémenter de 1 a chaque fois qu'un méchant est vaincu une fois que heroWIN aura atteint une certaine valeur on lancera la scène de victoire !
    this.heroWIN = 0;

    //stats du héros
    this.hero[0] = {     
        heroHP: 15,
        heroATK: 10,
        heroDEF: 3,
    };

    //Création de 10 monstres
    for(i = 0; i < 10; i++){
        this.monstres[i] = {    
            mobHP: 10,
            mobATK: 5,
            mobDEF: 2,
        };
    };

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
  }

  create() {
    //ajout du background
    this.add.image(500, 200, "glacier").setScrollFactor(1, 0);

    //ajout de l'image du hero
    this.player = this.physics.add.sprite(240, 320, "player").setScale(1.5);
    this.player.setCollideWorldBounds(true);

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

        //Le héros attaque
        this.monsters[this.nbMob].mobHP -= damage(this.hero[0].heroATK, this.monsters[this.nbMob].mobDEF);
        console.log("PDV du monstre :" + this.monsters[this.nbMob].mobHP);

            if(this.monsters[this.nbMob].mobHP <= 0){
                console.log("Le monstre est mort");

                this.heroWIN++;
                this.totalWins++;
                localStorage.setItem('win', this.totalWins);
                this.nbMob++;
                this.nbDuel--;
                this.endDuel = true;
            }else{
                this.hero[0].heroHP -= damage(this.monsters[this.nbMob].mobATK, this.hero[0].heroDEF);
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

      //degat du hero va dépendre de la défense du méchant et de l'attaque du hero
    damage(attaque, defense){
        degats = attaque - defense;
        return degats;
    }
}
