import Phaser from "../lib/phaser.js";
var cursors;
var player;

export default class MainScreen extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.image("background", "assets/background_mainscreen.jpg");
    this.load.image("hero", "assets/ghost3.png");
  }

  create() {
    // add a background image
    this.add.image(480, 320, "background").setScrollFactor(1, 0);

    player = this.physics.add.image(400, 300, "hero");

    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    player.setVelocity(0);

    if (cursors.left.isDown) {
      player.setVelocityX(-300);
    } else if (cursors.right.isDown) {
      player.setVelocityX(300);
    }

    if (cursors.up.isDown) {
      player.setVelocityY(-300);
    } else if (cursors.down.isDown) {
      player.setVelocityY(300);
    }
  }
}
