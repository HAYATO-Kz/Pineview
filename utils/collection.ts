import Camera from '../assets/images/collection/collection_camera.png';
import Cloud from '../assets/images/collection/collection_cloud.png';
import Fire from '../assets/images/collection/collection_fire.png';
import Headphone from '../assets/images/collection/collection_headphone.png';
import Heart from '../assets/images/collection/collection_heart.png';
import King from '../assets/images/collection/collection_king.png';
import Pin from '../assets/images/collection/collection_pin.png';
import Rocket from '../assets/images/collection/collection_rocket.png';
import Star from '../assets/images/collection/collection_star.png';
import Thunder from '../assets/images/collection/collection_thunder.png';

export const getCollectionIconSource = (icon: string) => {
  switch (icon) {
    case 'heart':
      return Heart;
    case 'cloud':
      return Cloud;
    case 'king':
      return King;
    case 'rocket':
      return Rocket;
    case 'star':
      return Star;
    case 'thunder':
      return Thunder;
    case 'fire':
      return Fire;
    case 'headphone':
      return Headphone;
    case 'camera':
      return Camera;
    case 'pin':
      return Pin;
    case 'all':
      return [
        Heart,
        Cloud,
        King,
        Rocket,
        Star,
        Thunder,
        Fire,
        Headphone,
        Camera,
        Pin,
      ];
    default:
      return;
  }
};
