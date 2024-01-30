const iconFacebookUrl = 'https://www.facebook.com/goITclub/';
const iconInstagramUrl = 'https://www.instagram.com/goitclub/';
const iconYoutubeUrl = 'https://www.youtube.com/c/GoIT';

function createIconMarkup(url, label) {
  return `
    <li class="social-list-item">
      <a class="social-list-link" target="_blank" rel="noopener" href="${url}">
        <svg class="social-list-icon" width="28" height="28" aria-label="${label} icon">
          <use href="../img/icons/symbols.svg#${label.toLowerCase()}"></use>
        </svg>
      </a>
    </li>
  `;
}
const element = document.querySelector('#your-element-id');

if (element) {
  element.insertAdjacentHTML('position', 'text');
} else {
  console.error('Елемент не знайдено');
}

const socialList = document.querySelector('.social-list-menu');
const ulElement = document.querySelector('.social-list-header');

const iconsMarkup = `
  ${createIconMarkup(iconFacebookUrl, 'Facebook')}
  ${createIconMarkup(iconInstagramUrl, 'Instagram')}
  ${createIconMarkup(iconYoutubeUrl, 'Youtube')}
`;

ulElement.insertAdjacentHTML('beforeend', iconsMarkup);
socialList.insertAdjacentHTML('beforeend', iconsMarkup);
