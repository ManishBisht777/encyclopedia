import AfricanForestElephant from "./assets/animal_images/AfricanForestElephant.jpg";
import AmurLeopard from "./assets/animal_images/AmurLeopard.jpg";
import BigeyeTuna from "./assets/animal_images/BigeyeTuna.jpg";
import BlackRhino from "./assets/animal_images/BlackRhino.jpg";
import BlackSpiderMonkey from "./assets/animal_images/BlackSpiderMonkey.jpg";
import BluefinTuna from "./assets/animal_images/BluefinTuna.jpg";
import BlueWhale from "./assets/animal_images/BlueWhale.jpg";
import Bononno from "./assets/animal_images/Bononno.JPG";
import BorneanOrangutan from "./assets/animal_images/BorneanOrangutan.jpg";
import Dugong from "./assets/animal_images/Dugong.jpg";
import EasternGorilla from "./assets/animal_images/EasternGorilla.jpg";
import ferret from "./assets/animal_images/ferret.jpg";
import GreatWhiteShark from "./assets/animal_images/GreatWhiteShark.jpg";
import hawkWhiteSkark from "./assets/animal_images/hawksbillTurtle.jpg";
import Panda from "./assets/animal_images/Panda.jpg";
import SavannahElephant from "./assets/animal_images/SavannahElephant.jpg";
import Totrise from "./assets/animal_images/Totrise.jpg";
import WildDogs from "./assets/animal_images/WildDogs.jpg";

const images = {
  AfricanForestElephant,
  AmurLeopard,
  BigeyeTuna,
  BlackRhino,
  BlackSpiderMonkey,
  BluefinTuna,
  BlueWhale,
  Bononno,
  Dugong,
  BorneanOrangutan,
  EasternGorilla,
  ferret,
  GreatWhiteShark,
  hawkWhiteSkark,
  Panda,
  SavannahElephant,
  Totrise,
  WildDogs,
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;
