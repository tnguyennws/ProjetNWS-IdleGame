import Phaser from "../../../lib/phaser.js";

export default class m4lv3 extends Phaser.Scene {
  constructor() {
    super("M4LV3");
  }

  init() {
    //duel1 est a l'état false quand un méchant sera vaincu il passera a true ce qui permet de passer au méchant suivant
    this.nbDuel = 60;

    this.nbDuel2 = 1;
    this.heroMort = false;

    //heroWIN va s'incrémenter de 1 a chaque fois qu'un méchant est vaincu une fois que heroWIN aura atteint une certaine valeur on lancera la scène de victoire !
    this.heroWIN = 0;

    //stats du héros
    this.hero = [];
    this.hero[0] = {
      heroHP: parseInt(localStorage.getItem("vie")),
      heroATK: parseInt(localStorage.getItem("atk")) + parseInt(localStorage.getItem("arme")),
      heroDEF: parseInt(localStorage.getItem("def")) + parseInt(localStorage.getItem("armure")),
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
    for (let i = 0; i < 60; i++) {
      this.monsters[i] = {
        mobHP: 10,
        mobATK: 5,
        mobDEF: 2,
      };
    }

    this.nbMob = 0;

    this.anim = 0;
    //Gestion de données
    this.totalWins = localStorage.getItem("wins");
    this.totalLoses = localStorage.getItem("loses");
    this.or = localStorage.getItem("or");
    this.exp = localStorage.getItem('exp');
  }

  preload() {
    this.load.image("glacier", "assets/glacier.jpg");
    this.load.image("player", "assets/hero-down-tp.png");
    this.load.image("ghost3", "assets/ghost3.png");
    this.load.image("mob", "assets/elec.jpg");
    this.load.image("hero", "assets/hero-left.png");
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
    while (
      this.nbDuel > 0 &&
      this.hero[0].heroHP > 0 &&
      this.heroMort === false
    ) {
      this.endDuel = false;

      while (this.endDuel == false && this.heroMort === false) {

        //Le héros attaque
        this.monsters[this.nbMob].mobHP -=
          this.hero[0].heroATK - this.monsters[this.nbMob].mobDEF;
        console.log(
          "PDV du monstre " +
            this.nbMob +
            " : " +
            this.monsters[this.nbMob].mobHP
        );

        if (this.monsters[this.nbMob].mobHP <= 0) {
          console.log("Le monstre est mort");
          console.log("Combat suivant");

          this.heroWIN++;
          this.totalWins++;
          this.or++;
          this.exp++;
          localStorage.setItem("win", this.totalWins);
          localStorage.setItem("or", this.or);
          localStorage.setItem("exp", this.exp);
          this.nbMob++;
          this.nbDuel--;
          this.endDuel = true;
        } else {
          this.hero[0].heroHP -=
            this.monsters[this.nbMob].mobATK - this.hero[0].heroDEF;
          console.log("PDV du hero :" + this.hero[0].heroHP);

          if (this.hero[0].heroHP > 0) {
            console.log("Round suivant");
          } else {
            console.log("Le héros est mort");
            this.endDuel = true;
            this.heroMort = true;
          }
        }
      }
    }
    if (this.nbDuel === 0) {
      this.scene.start("victory-screen");
    }
    if (this.heroMort === true) {
      this.scene.start("defeat-screen");
    }
  }
}
