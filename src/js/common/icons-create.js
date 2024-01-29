import iconsListMarkup from '../icons/icons-markup';

function createIconsList(iconsContainer, iconAttr, icons = []) {
    const iconsMarkup = iconsListMarkup(iconAttr, icons);
    iconsContainer.innerHTML = '';
    iconsContainer.insertAdjacentHTML('beforeend', iconsMarkup);
}

export default createIconsList;

