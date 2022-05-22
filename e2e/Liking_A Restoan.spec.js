/* eslint-disable import/newline-after-import */
/* eslint-disable no-undef */
const assert = require('assert');
Feature('Liking A Restoan');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Menyukai Restoran', async ({ I }) => {
  I.amOnPage('/#/Home');

  I.seeElement('h2 a');
  const firstFilm = locate('h2 a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');
  I.seeElement('.item-produk');

  const likedFilmTitle = await I.grabTextFrom('h2 a');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('Batal Menyukai Restoran', async ({ I }) => {
  I.amOnPage('/#/Favorite');

  I.seeElement('h2 a');
  I.click(locate('h2 a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');
  I.seeElement('.item-produk');
});
