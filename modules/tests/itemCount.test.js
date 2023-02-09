import itemsCount from '../itemCount.js';
import generateMarkup from '../generateMarkup.js';

/**
 * @jest-environment jsdom
 */

const data = [
  {
    'Species Name': 'Crimson Jobfish',
    'Image Gallery': [
      {
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/4_9.jpg',
      },
    ],
  },
  {
    'Species Name': 'White Hake',
    'Image Gallery': [
      {
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/white%20hake_Calvin%20Alexander_1.jpg',
      },
    ],
  },
  {
    'Species Name': 'Atlantic Chub Mackerel',
    'Image Gallery': [
      {
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Atlantic%20Chub%20Mackerel_Alessandro%20Duci.jpg',
      },
    ],
  },
  {
    'Species Name': 'American Lobster',
    'Image Gallery': [
      {
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/1.JPG',
      },
    ],
  },
  {
    'Species Name': 'Sugar Kelp',
    'Image Gallery': [
      {
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/SugarKelp_online.jpg',
      },
    ],
  },
  {
    'Species Name': 'Atlantic Halibut',
    'Image Gallery': [
      {
        src: 'https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/1%20-%20atl_halibut_noa.jpg',
      },
    ],
  },
];

describe('TodoApp', () => {
  test('Number of fishes In the DOM before API fetch', () => {
    document.body.innerHTML = `
     <section id="fish_container">
      <div class="header">
        <h1 class="main_header">Lists of Fishes</h1>
        <h1 class="fish_count">(0)</h1>
      </div>
    <section class="fishes_container"></section>
    </section>`;
    const section = document.querySelector('.fishes_container');
    expect(itemsCount(section)).toHaveLength(0);
  });

  test('Number of fishes displayed in the DOM after a successful API call', () => {
    document.body.innerHTML = `
     <section id="fish_container">
      <div class="header">
        <h1 class="main_header">Lists of Fishes</h1>
        <h1 class="fish_count">(0)</h1>
      </div>
    <section class="fishes_container"></section>
    </section>`;
    const fishSection = document.getElementById('fish_container');
    const section = document.querySelector('.fishes_container');
    generateMarkup(data, fishSection, []);
    expect(itemsCount(section)).toHaveLength(6);
  });
});
