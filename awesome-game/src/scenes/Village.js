import Phaser from "../lib/phaser.js";

export default class Village extends Phaser.Scene {
  /** @type {Phaser.Physics.Arcade.Sprite} */
  player;

  /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
  cursors;

  constructor() {
    super("village");
  }

    // --------------- GESTION DES DONNEES --------------------
    //Fonction de sauvegarde dans le local storage
    saveFile(){
      var file = {
        vie: this.vie,
        atk: this.atk,
        def: this.def,
        niveau: this.niveau,
        or: this.or,
        exp: this.exp,
        arme: this.arme,
        armure: this.armure,
        win: this.win
      };
      console.log("Fichier enregistré");
      localStorage.setItem('saveFile',JSON.stringify(file));
  };

  //Fonction de chargement depuis le local storage
  loadFile(){
      var file = JSON.parse(localStorage.getItem('saveFile'));
      this.vie = file.vie;
      this.atk = file.atk;
      this.def = file.def;
      this.niveau = file.niveau;
      this.or = file.or;
      this.exp = file.exp;
      this.arme = file.arme;
      this.armure = file.armure;
      this.win = file.win
  };

  //----------------- INIT ----------------
  init()
  {

    if(localStorage.getItem('exp') > 0){
      this.vie = localStorage.getItem('vie');
      this.atk = localStorage.getItem('atk');
      this.def = localStorage.getItem('def');
      this.niveau = localStorage.getItem('niveau');
      this.or = localStorage.getItem('or');
      this.exp = localStorage.getItem('exp');
      this.arme = localStorage.getItem('arme');
      this.armure = localStorage.getItem('armure');
      this.win = localStorage.getItem('win');
    }
    else{
      this.vie = 100;
      this.atk = 10;
      this.def = 3;
      this.niveau = 1;
      this.or = 0;
      this.exp = 0;
      this.arme = 0;
      this.armure = 0;
      this.win = 0;

      localStorage.setItem('vie', this.vie);
      localStorage.setItem('atk', this.atk);
      localStorage.setItem('def', this.def);
      localStorage.setItem('niveau', this.niveau);
      localStorage.setItem('or', this.or);
      localStorage.setItem('exp', this.exp);
      localStorage.setItem('arme', this.arme);
      localStorage.setItem('armure', this.armure);
      localStorage.setItem('win', this.win);
    }
  }

  preload() {
    // load the images
    this.load.image("village", "assets/background_village.png");
    this.load.image("player", "assets/hero-down-tp.png");
    this.load.image("pnj", "assets/ghost3.png");

    this.load.image("sauvegarde", "assets/sauvegarde.png");
    this.load.image("telecharger", "assets/telecharger.png");

    //load the audio

    // load the cursor
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    // add a background image
    this.add
      .image(200, 200, "village")
      .setScrollFactor(1, 0)
      .setScale(3);

    var pnj1 = this.add.image(150, 200, "pnj").setScale(1);

    var pnj2 = this.add.image(630, 200, "pnj").setScale(1);
    
    
    var pnj3 = this.add.image(400, 200, "pnj").setScale(1);

    
    this.labelOr = this.add.text(20, 20, "Or: ", {font: "30px Arial", fill: "#ffff"} );
    this.labelXP = this.add.text(20, 60, "XP: ", {font: "30px Arial", fill: "#ffff"} );
    this.labelLV = this.add.text(20, 100, "LV: ", {font: "30px Arial", fill: "#ffff"} );
  


    pnj1.setInteractive();
    pnj2.setInteractive();
    pnj3.setInteractive();

    //Bouton sauvegarde
    var sauvegarde = this.add.image(1230, 45, "sauvegarde").setScale(0.1);

    sauvegarde.setInteractive();
    sauvegarde.on(
        "pointerdown",
        function(){
            if (window.confirm("Voulez vous sauvegarder ?")) {
                this.saveFile();
            }
            
        },
        this
    );

    //Bouton chargement
    var telecharger = this.add.image(1300, 45, "telecharger").setScale(0.1);

    telecharger.setInteractive();
    telecharger.on(
        "pointerdown",
        function(){                
            if (window.confirm("Voulez vous charger la sauvegarde ?")) {
                this.loadFile();
            }
            
        },
        this
    );

    pnj1.on(
      "pointerdown",
      function() {
        this.scene.start("M1LV3");
      },
      this
    );

    pnj2.on(
      "pointerdown",
      function() {
        this.scene.start("M1LV1");
      },
      this
    );

    pnj3.on(
      "pointerdown",
      function() {
        this.scene.start("listmonde");
      },
      this
    );


    this.player = this.physics.add.sprite(240, 320, "player").setScale(1.5);
    this.player.setCollideWorldBounds(true);

    // set the horizontal dead zone to 1.5x game width
    this.cameras.main.setDeadzone(this.scale.width * 1);
  }

  update(t, dt) {
    this.labelOr.text = "Or :" + this.or;// affichage de l'or
    this.labelXP.text = "XP :" + this.exp;// affichage de l'xp
    this.labelLV.text = "LV :" + this.niveau;// affichage du niveau
   
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
