/* eslint-disable import/named */
import RestaurantSource from '../../data/restourant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <article>
        <h2>Selamat Datang di RestoKu</h2>
        <div class="item-produk">
        
        </div>
        </div>
        </article>
        `;
  },
  async afterRender() {
    const restorans = await RestaurantSource.HomeRestaurant();
    const restoContainer = document.querySelector('.item-produk');
    restorans.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    console.log(restorans);
  },
};

export default Home;
