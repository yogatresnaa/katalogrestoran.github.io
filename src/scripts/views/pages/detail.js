import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restourant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <div id="restoran" class="restoran"></div>
      <div id="likeButtonContainer"></div>

      
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#restoran');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });
    console.log(resto);
  },
};

export default Detail;
