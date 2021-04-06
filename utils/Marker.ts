import CafeMarker from '../assets/images/marker/cafe_marker.png';
import RestaurantMarker from '../assets/images/marker/restaurant_marker.png';
import TouristSpotMarker from '../assets/images/marker/tourist_marker.png';

/**
 * Get marker image
 * @param type Place's type
 */
export const getMarker = (type: string) => {
  switch (type) {
    case 'cafe':
      return CafeMarker;
    case 'restaurant':
      return RestaurantMarker;
    case 'attraction':
      return TouristSpotMarker;

    default:
      return RestaurantMarker;
  }
};
