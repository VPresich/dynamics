import iconsListMarkup from '../icons/icons-markup';

function createIconsList(iconsContainer, iconAttr, icons = []) {
    const iconsMarkup = iconsListMarkup(iconAttr, icons);
    iconsContainer.innerHTML = '';
    iconsContainer.insertAdjacentHTML('beforeend', iconsMarkup);
}

export default createIconsList;

//example
// import socialIconsArr from '../icons/icons-list';
// import iconURL from '../../img/icons/symbols.svg';
// import createIconsList
// const iconAttr = { //ваші класи прописати
//     iconURL: iconURL,
//     iconContainerClass:'social-item-footer',
//     iconLinkClass:'social-link-footer',
//     iconClass:'social-icon',
// }

// const container = document.querySelector('.social-list-header');
// console.log(container);
// createIconsList(container, iconAttr, socialIconsArr);

