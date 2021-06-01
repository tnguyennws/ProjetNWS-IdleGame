import Phaser from "./lib/phaser.js";
import Village from "./scenes/Village.js";
import Forge from "./scenes/Forge.js";
import MainScreen from "./scenes/MainScreen.js";
import Bibli from "./scenes/Bibliotheque.js";
import Aventure from "./scenes/Aventure.js";
import lv1 from "./scenes/M1LV1.js";
import lv2 from "./scenes/M1LV2.js";
import lv3 from "./scenes/M1LV3.js";
import ListMonde from "./scenes/ListMonde.js";
import ListLvM1 from "./scenes/listlvm1.js";
import ListLvM2 from "./scenes/listlvm2.js";
import ListLvM3 from "./scenes/listlvm3.js";
import m4lv1 from "./scenes/M4LV1.js";
import ListLvM4 from "./scenes/listlvm4.js";
import m4lv2 from "./scenes/M4LV2.js";
import m4lv3 from "./scenes/M4LV3.js";
import m4lv4 from "./scenes/M4LV4.js";



export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 1340,
  height: 640,
  scene: [MainScreen, Village, Forge, Bibli, Aventure, lv1, lv2, lv3, ListMonde, ListLvM1, ListLvM2, ListLvM3 ,m4lv1 ,ListLvM4 ,m4lv2 ,m4lv3 ,m4lv4] ,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
});
