import Phaser from "../../../lib/phaser.js";

export default class lv2 extends Phaser.Scene {
  heroHP = 15;
  heroATK = 10;
  heroDEF = 5;

  SkeHP = 10;
  SkeATK = 5;
  SkeDEF = 2;

  constructor() {
    super("M1LV2");
  }

  init() {
    //permet d'avoir un nombre aléatoire(sois 0 ou 1) pour choisir aléatoirement un méchant a combattre
    this.mechant1 = Math.floor(Math.random() * 2);
    console.log(this.mechant1);

    //permet d'avoir un nombre aléatoire(sois 0 ou 1) pour choisir aléatoirement un méchant a combattre
    this.mechant2 = Math.floor(Math.random() * 2);
    console.log(this.mechant2);

    //permet d'avoir un nombre aléatoire(sois 0 ou 1) pour choisir aléatoirement un méchant a combattre
    this.mechant3 = Math.floor(Math.random() * 2);
    console.log(this.mechant3);

    //duel1 est a l'état false quand un méchant sera vaincu il passera a true ce qui permet de passer au méchant suivant
    this.duel1 = false;

    //duel2 est a l'état false quand un méchant sera vaincu il passera a true ce qui permet de passer au méchant suivant
    this.duel2 = false;

    //duel3 est a l'état false quand un méchant sera vaincu il passera a true ce qui permet de passer au méchant suivant
    this.duel3 = false;

    //duel4 est a l'état false quand un méchant sera vaincu il passera a true ce qui permet de passer au méchant suivant
    this.duel4 = false;

    //duel5 est a l'état false quand un méchant sera vaincu il passera a true ce qui permet de passer au méchant suivant
    this.duel5 = false;

    //heroWIN va s'incrémenter de 1 a chaque fois qu'un méchant est vaincu une fois que heroWIN aura atteint une certaine valeur on lancera la scène de victoire !
    this.heroWIN = 0;

    //point de vie du hero
    this.heroHP = 100;

    //attaque du hero
    this.heroATK = 10;

    //defense du hero
    this.heroDEF = 3;

    //degat du hero va dépendre de la défense du méchant et de l'attaque du hero
    this.degatHero = 0;

    // point de vie d'un skellete
    this.SkeHP = 10;

    // attaque d'un skelette
    this.SkeATK = 5;

    //defense d'un skelette
    this.SkeDEF = 2;

    //degat du skelette va dépendre de la défense du héro et de l'attaque du skelette
    this.degatSke = 0;

    this.Ske2HP = 10;
    this.Ske2ATK = 5;
    this.Ske2DEF = 2;
    this.degat2Ske = 0;

    this.Ske3HP = 10;
    this.Ske3ATK = 5;
    this.Ske3DEF = 2;
    this.degat3Ske = 0;

    this.mobHP = 10;
    this.mobATK = 5;
    this.mobDEF = 2;
    this.degatMob = 0;

    this.mob2HP = 10;
    this.mob2ATK = 5;
    this.mob2DEF = 2;
    this.degat2Mob = 0;

    this.mob3HP = 10;
    this.mob3ATK = 5;
    this.mob3DEF = 2;
    this.degat3Mob = 0;
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
    if (this.mechant1 === 0 && this.duel1 === false) {
      //ajout de l'image du skelette
      this.ghost = this.physics.add.sprite(540, 320, "ghost3").setScale(1.5);

      if (this.heroHP > 0 && this.SkeHP > 0 && this.duel1 === false) {
        if (this.heroHP > 0) {
          //calcul de l'attaque du héro
          this.degatHero = this.heroATK - this.SkeDEF;
          console.log("Degat du hero", this.degatHero);

          //calcul des points de vie restant du skelette
          this.SkeHP = this.SkeHP - this.degatHero;
        }

        console.log("PV du hero", this.heroHP);
        console.log("PV du ske", this.SkeHP);
        if (this.SkeHP > 0) {
          //calcul des degats du skelette
          this.degatSke = this.SkeATK - this.heroDEF;

          //calcul des points de vie du héro
          this.heroHP = this.heroHP - this.degatSke;
          console.log("Degat du ske", this.degatSke);
          console.log("PV du hero apres attaque", this.heroHP);
        }
      } else {
        if (this.SkeHP <= 0) {
          console.log("Ske a perdu");

          //on ajoute +1 à "heroWIN"
          this.heroWIN = this.heroWIN + 1;
          console.log("nb victoire" + this.heroWIN);

          this.duel1 = true;
        }

        if (this.heroHP <= 0) {
          //console.log('Hero a perdu ')
        }
      }
    } else {
      if (this.heroHP > 0 && this.mobHP > 0 && this.duel1 === false) {
        if (this.heroHP > 0) {
          this.degatHero = this.heroATK - this.mobDEF;

          console.log("Degat du hero", this.degatHero);

          //calcul des dégats du héro par rapport a son attaque et a la défense du méchant
          this.degatHero = this.heroATK - this.mobDEF;

          //calcul des points de vie du méchant par rapport a ces points de vie et a l'attaque du héro
          this.mobHP = this.mobHP - this.degatHero;

          console.log("PV du hero", this.heroHP);
          console.log("PV du mob", this.mobHP);
        }

        if (this.mobHP > 0) {
          this.degatMob = this.mobATK - this.heroDEF;
          this.heroHP = this.heroHP - this.degatMob;

          console.log("Degat du mob", this.degatMob);
          console.log("PV du hero apres attaque", this.heroHP);
        }

        if (this.mobHP <= 0) {
          console.log("mob a perdu");
          this.heroWIN = this.heroWIN + 1;
          console.log("nb victoire" + this.heroWIN);
          this.duel1 = true;
        }

        if (this.heroHP <= 0) {
          //console.log('Hero a perdu ')
        }
      }
    }

    if (this.mechant2 === 0 && this.duel1 === true && this.duel2 === false) {
      if (this.heroHP > 0) {
        this.degatHero = this.heroATK - this.Ske2DEF;

        console.log("Degat du hero", this.degatHero);

        this.degatHero = this.heroATK - this.Ske2DEF;
        this.Ske2HP = this.Ske2HP - this.degatHero;

        console.log("PV du hero", this.heroHP);
        console.log("PV du ske2", this.Ske2HP);
      }
      if (this.Ske2HP > 0) {
        this.degat2Ske = this.Ske2ATK - this.heroDEF;
        this.heroHP = this.heroHP - this.degat2Ske;

        console.log("Degat du ske2", this.degat2Ske);
        console.log("PV du hero apres attaque", this.heroHP);
      }

      if (this.Ske2HP <= 0) {
        console.log("Ske2 a perdu");

        this.heroWIN = this.heroWIN + 1;
        console.log("nb victoire" + this.heroWIN);
        this.duel2 = true;
      }

      if (this.heroHP <= 0) {
        //console.log('Hero a perdu ')
      }
    }

    //fin combat 2 vs ske2
    else {
      if (
        this.heroHP > 0 &&
        this.mob2HP > 0 &&
        this.duel1 === true &&
        this.duel2 === false
      ) {
        if (this.heroHP > 0) {
          this.degatHero = this.heroATK - this.mob2DEF;

          console.log("Degat du hero", this.degatHero);

          //calcul des dégats du héro par rapport a son attaque et a la défense du méchant
          this.degatHero = this.heroATK - this.mob2DEF;

          //calcul des points de vie du méchant par rapport a ces points de vie et a l'attaque du héro
          this.mob2HP = this.mob2HP - this.degatHero;
          console.log("PV du hero", this.heroHP);
          console.log("PV du mob2", this.mob2HP);

          if (this.mob2HP > 0) {
            this.degat2Mob = this.mob2ATK - this.heroDEF;
            this.heroHP = this.heroHP - this.degat2Mob;

            console.log("Degat du mob2", this.degat2Mob);
            console.log("PV du hero apres attaque", this.heroHP);
          }

          if (this.mob2HP <= 0) {
            console.log("mob2 a perdu");
            this.heroWIN = this.heroWIN + 1;
            console.log("nb victoire" + this.heroWIN);
            this.duel2 = true;
            console.log(this.duel2);
          }

          if (this.heroHP <= 0) {
            //console.log('Hero a perdu ')
          }
        }
      }
    }

    //fin combat 2 vs mob 2

    //début du combat 3
    if (
      this.mechant3 === 0 &&
      this.duel1 === true &&
      this.duel2 === true &&
      this.duel3 === false
    ) {
      if (this.heroHP > 0) {
        this.degatHero = this.heroATK - this.Ske3DEF;
        console.log("Degat du hero", this.degatHero);
        this.degatHero = this.heroATK - this.Ske3DEF;

        this.Ske3HP = this.Ske3HP - this.degatHero;

        console.log("PV du hero", this.heroHP);
        console.log("PV du ske3", this.Ske3HP);
      }
      if (this.Ske3HP > 0) {
        this.degat3Ske = this.Ske3ATK - this.heroDEF;
        this.heroHP = this.heroHP - this.degat3Ske;
        console.log("Degat du ske3", this.degat3Ske);
        console.log("PV du hero apres attaque", this.heroHP);
      }

      if (this.Ske3HP <= 0) {
        console.log("Ske3 a perdu");

        this.heroWIN = this.heroWIN + 1;
        console.log("nb victoire" + this.heroWIN);
        this.duel3 = true;
      }

      if (this.heroHP <= 0) {
        //console.log('Hero a perdu ')
      }
    }

    //fin combat 3 vs ske3
    else {
      if (
        this.heroHP > 0 &&
        this.mob3HP > 0 &&
        this.duel1 === true &&
        this.duel2 === true &&
        this.duel3 === false
      ) {
        if (this.heroHP > 0) {
          this.degatHero = this.heroATK - this.mob3DEF;

          console.log("Degat du hero", this.degatHero);

          //calcul des dégats du héro par rapport a son attaque et a la défense du méchant
          this.degatHero = this.heroATK - this.mob3DEF;

          //calcul des points de vie du méchant par rapport a ces points de vie et a l'attaque du héro
          this.mob3HP = this.mob3HP - this.degatHero;
        }

        console.log("PV du hero", this.heroHP);
        console.log("PV du mob3", this.mob3HP);

        if (this.mob3HP > 0) {
          this.degat3Mob = this.mob3ATK - this.heroDEF;
          this.heroHP = this.heroHP - this.degat3Mob;

          console.log("Degat du mob3", this.degat3Mob);
          console.log("PV du hero apres attaque", this.heroHP);
        }

        if (this.mob3HP <= 0) {
          console.log("mob3 a perdu");
          this.heroWIN = this.heroWIN + 1;
          console.log("nb victoire" + this.heroWIN);
          this.duel3 = true;
        }

        if (this.heroHP <= 0) {
          //console.log('Hero a perdu ')
        }
      }
    }
  }
}
