import Phaser from "../lib/phaser.js";

export default class MainScreen extends Phaser.Scene {
  constructor() {
    super("forge");
  }

  init() {
    if (localStorage.getItem("exp") > 0) {
      this.vie = localStorage.getItem("vie");
      this.atk = localStorage.getItem("atk");
      this.def = localStorage.getItem("def");
      this.niveau = localStorage.getItem("niveau");
      this.or = localStorage.getItem("or");
      this.exp = localStorage.getItem("exp");
      this.arme = localStorage.getItem("arme");
      this.armure = localStorage.getItem("armure");
      this.win = localStorage.getItem("win");
    } else {
      this.vie = 100;
      this.atk = 10;
      this.def = 3;
      this.niveau = 1;
      this.or = 0;
      this.exp = 0;
      this.arme = 1;
      this.armure = 1;
      this.win = 0;

      localStorage.setItem("vie", this.vie);
      localStorage.setItem("atk", this.atk);
      localStorage.setItem("def", this.def);
      localStorage.setItem("niveau", this.niveau);
      localStorage.setItem("or", this.or);
      localStorage.setItem("exp", this.exp);
      localStorage.setItem("arme", this.arme);
      localStorage.setItem("armure", this.armure);
      localStorage.setItem("win", this.win);
    }
  }

  preload() {
    this.load.image("forge", "assets/forge.jpg");
    this.load.image("player", "assets/hero-down-tp.png");
    this.load.image("acheter_niveau", "assets/titles/Acheter_un_niveau.png");
    this.load.image("ameliorer_arme", "assets/titles/Ameliorer_larme.png");
    this.load.image("ameliorer_armure", "assets/titles/Ameliorer_larmure.png");

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.add.image(500, 200, "forge").setScrollFactor(1, 0);

    this.labelOr = this.add.text(20, 20, "Or: ", {
      font: "30px Arial",
      fill: "#ffff",
    });
    this.labelXP = this.add.text(20, 60, "XP: ", {
      font: "30px Arial",
      fill: "#ffff",
    });
    this.labelLV = this.add.text(20, 100, "LV: ", {
      font: "30px Arial",
      fill: "#ffff",
    });
    this.labelArme = this.add.text(20, 100, "Arme niv.: ", {
        font: "30px Arial",
        fill: "#ffff",
    });
    this.labelArmure = this.add.text(20, 100, "Armure niv.: ", {
        font: "30px Arial",
        fill: "#ffff",
    });

    var niveau = this.add.image(250, 200, "acheter_niveau").setScale(0.3);
    var arme = this.add.image(650, 200, "ameliorer_arme").setScale(0.3);
    var armure = this.add.image(1050, 200, "ameliorer_armure").setScale(0.3);

    niveau.setInteractive();
    arme.setInteractive();
    armure.setInteractive();

    niveau.on(
      "pointerdown",
      function() {
        if (this.exp > this.niveau * 150) {
          this.niveau++;
          this.vie += 10;
          this.atk += 2;
          this.def++;
          localStorage.setItem("niveau", this.niveau);
          localStorage.setItem("vie", this.vie);
          localStorage.setItem("atk", this.atk);
          localStorage.setItem("def", this.def);
        } else {
          window.confirm("Vous n'avez pas assez d'expérience");
        }
      },
      this
    );

    arme.on(
      "pointerdown",
      function() {
        var cout_arme = this.arme * 15;
        if (this.or > cout_arme) {
          this.or = this.or - cout_arme;
          this.arme++;
          this.atk += 2;
          localStorage.setItem("or", this.or);
          localStorage.setItem("atk", this.atk);
          localStorage.setItem("arme", this.arme);
        } else {
          window.confirm("Vous n'avez pas assez d'or");
        }
      },
      this
    );

    armure.on(
      "pointerdown",
      function() {
        window.confirm("Feature en attente");
      },
      this
    );

    this.player = this.physics.add.sprite(650, 300, "player").setScale(1.5);
    this.player.setCollideWorldBounds(true);

    // set the horizontal dead zone to 1.5x game width
    this.cameras.main.setDeadzone(this.scale.width * 1);

    this.input.keyboard.once("keydown-SPACE", () => {
      this.scene.start("village");
    });
  }

  update(t, dt) {
    this.labelOr.text = "Or :" + this.or; // affichage de l'or
    this.labelXP.text = "XP :" + this.exp; // affichage de l'xp
    this.labelLV.text = "LV :" + this.niveau; // affichage du niveau
    this.labelArme.text = "Arme niv.:" + this.arme; // affichage du niveau d'arme
    this.labelArmure.text = "Armure lv.:" + this.armure; // affichage du niveau d'armure

    // left and right input logic
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(200);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-200);
    } else {
      // stop movement if not left or right
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }
  }
}
