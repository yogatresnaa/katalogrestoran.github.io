/* eslint-disable no-undef */
import FavoriteRestodb from '../src/scripts/data/favoriteresto-idb';
import * as TesFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restoran', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestodb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestodb.deleteResto(1);
  });
  it('should display unlike widget when the Reso has been liked', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
  });

  it('should not display like widget when the Reso has been liked', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });
  it('should be able to remove liked Reso from the list', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestodb.getAllResto()).toEqual([]);
  });
  it('should not throw error if the unliked Reso is not in the list', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({ id: 1 });
    await FavoriteRestodb.deleteResto(1);
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestodb.getAllResto()).toEqual([]);
  });
});
