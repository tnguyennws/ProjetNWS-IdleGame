import Phaser from "./lib/phaser.js";
import Village from "./scenes/Village.js";
import Forge from "./scenes/Forge.js";
import MainScreen from "./scenes/MainScreen.js";
import Bibli from "./scenes/Bibliotheque.js";
import Aventure from "./scenes/Aventure.js";
import lv1 from "./scenes/Niveaux/monde1/M1LV1.js";
import lv2 from "./scenes/Niveaux/monde1/M1LV2.js";
import lv3 from "./scenes/Niveaux/monde1/M1LV3.js";
import ListMonde from "./scenes/ListMonde.js";
import ListLvM1 from "./scenes/ListeMonde/listlvm1.js";
import ListLvM2 from "./scenes/ListeMonde/listlvm2.js";
import ListLvM3 from "./scenes/ListeMonde/listlvm3.js";
import m4lv1 from "./scenes/Niveaux/monde4/M4LV1.js";
import ListLvM4 from "./scenes/ListeMonde/listlvm4.js";
import m4lv2 from "./scenes/Niveaux/monde4/M4LV2.js";
import m4lv3 from "./scenes/Niveaux/monde4/M4LV3.js";
import m4lv4 from "./scenes/Niveaux/monde4/M4LV4.js";
import m3lv1 from "./scenes/Niveaux/monde3/M3LV1.js";
import m3lv2 from "./scenes/Niveaux/monde3/M3LV2.js";
import m3lv3 from "./scenes/Niveaux/monde3/M3LV3.js";
import m3lv4 from "./scenes/Niveaux/monde3/M3LV4.js";
import Victoire from "./scenes/victoire.js";
import VictoryScreen from "./scenes/VictoryScreen.js";
import DefeatScreen from "./scenes/DefeatScreen.js";
import m2lv1 from "./scenes/Niveaux/monde2/M2LV1.js";
import m2lv2 from "./scenes/Niveaux/monde2/M2LV2.js";
import m2lv3 from "./scenes/Niveaux/monde2/M2LV3.js";
import m2lv4 from "./scenes/Niveaux/monde2/M2LV4.js";


export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 1340,
  height: 640,
  scene: [MainScreen, Village, Forge, Bibli, Aventure, lv1, lv2, lv3, ListMonde, ListLvM1, ListLvM2, ListLvM3 ,m4lv1 
    ,ListLvM4 ,m4lv2 ,m4lv3 ,m4lv4 ,m3lv1 ,m3lv2 ,m3lv3 ,m3lv4 ,Victoire ,VictoryScreen ,DefeatScreen
  ,m2lv1 ,m2lv2 ,m2lv3 ,m2lv4] ,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
});
