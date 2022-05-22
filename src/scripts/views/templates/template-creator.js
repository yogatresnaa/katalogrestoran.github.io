/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (resto) => `
    <div class="ket-image">
        <h2 tabindex="0">${resto.name}</h2>
        <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.title}" >
    </div>
    <div class="info">
        <h3 tabindex="0">Alamat</h3>
        <p>${resto.address}</p>
        <h3 tabindex="0">Kota</h3>
        <p>${resto.city}</p>
        <h3 tabindex="0">Deskripsi</h3>
        <p>${resto.description}</p>
        <div class="daftarmenu">
            <h3 tabindex="0">Menu tersedia</h3>
            <div class="menu">
                    <div class="makan">
                        <h4 tabindex="0">Makanan</h4>
                        <ul class="foods">${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')} </ul>
                    </div>
                    <div class="minum">
                        <h4 tabindex="0">Minuman</h4>
                        <ul class="foods">${resto.menus.drinks.map((food) => `<li>${food.name}</li>`).join('')} </ul>
                    </div>
            </div>
        </div>      
    </div>   
        <div class="restaurantInfo">${resto.customerReviews
          .map(
            (review) => `
            <div class="restaurantInfoList">
                <h5 tabindex="0">${review.date}</h5>
                <h6 tabindex="0">${review.name}</h6>
                <p tabindex="0">"${review.review}"</p>
                
            </div>
        `
          )
          .join(' ')}
    </div>
`;

const createRestoItemTemplate = (resto) => `
          <div class="card">
              <div class="card-item" tabindex="0">
              <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="Restoran Indonesia" >
               <h2><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h2>
              <h3>${resto.city}</h3>
              <h4>${resto.rating}</h4>
              <p>${resto.description}</p>

            </div>
        </div>    

`;

const createLikeRestoButtonTemplate = () => `
  <div class="button2">
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
  </div>
`;

const createUnliekRestoButtonTemplate = () => `
<div class="button2">
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
   </div>
`;

export { createRestoDetailTemplate, createRestoItemTemplate, createLikeRestoButtonTemplate, createUnliekRestoButtonTemplate };
