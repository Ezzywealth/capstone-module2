import itemsCount from '../itemCount.js';

/**
 * @jest-environment jsdom
 */

describe('TodoApp', () => {
  test('Number of fishes fetched from the API displayed in the DOM', () => {
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
});
