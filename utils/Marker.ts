import CafeMarker from '../images/marker/afe_marker.png';
import RetaurantMaker from '../images/marker/restaurant_marker.png';
import TouristSpotMarker from '../images/marker/tourist_marker.png';

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
