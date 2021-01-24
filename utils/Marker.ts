import CafeMarker from '../images/cafe_marker.png';
import RetaurantMaker from '../images/restaurant_marker.png';
import TouristSpotMarker from '../images/tourist_marker.png';

export const getMarker = (type: string) => {
  switch (type) {
    case 'cafe':
      return CafeMarker;
    case 'restaurant':
      return RetaurantMaker;
    case 'attraction':
      return TouristSpotMarker;

    default:
      return undefined;
  }
};
