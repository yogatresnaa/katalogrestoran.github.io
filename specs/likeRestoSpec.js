/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import * as TesFactories from './helpers/testFactories';

describe('Liking A Restoan', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the Rsto has not been liked before', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });
  it('should not show the unlike button when the Resto has not been liked before', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });
  it('should be able to like the Resto', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restoran = await FavoriteRestoIdb.getResto(1);
    expect(restoran).toEqual({ id: 1 });
    FavoriteRestoIdb.deleteResto(1);
  });

  //   sekenario negatif : film telah disukai
  it('should not add a Resto  again when its already liked', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({ id: 1 });
    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a  Resto when it has no id', async () => {
    await TesFactories.createLikeButtonPresenterWithResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
