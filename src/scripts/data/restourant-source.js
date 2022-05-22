import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async HomeRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  // eslint-disable-next-line lines-between-class-members
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
    // return response.json();
  }
}

export default RestaurantSource;
