import Phaser from "../lib/phaser.js";

export default class DefeatScreen extends Phaser.Scene {
  constructor() {
    super("defeat-screen");
  }

  preload() {
    this.load.image("background", "assets/background_mainscreen.jpg");
    this.load.image("defeat", "assets/titles/Dfaite.png");
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    // add a background image
    this.add.image(480, 320, "background").setScrollFactor(1, 0);

    this.add.image(670, 350, "defeeat").setScale(1);

    this.add.text(width * 0.5, height * 0.5, 'Appuyer sur "Espace" pour revenir au village', {
      fontSize: 48
      })
      .setOrigin(0.5)

    this.input.keyboard.once("keydown-SPACE", () => {
      this.scene.start("main-screen");
    });
  }
}
