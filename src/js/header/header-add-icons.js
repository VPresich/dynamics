import socialIconsArr from '../icons/icons-list';
import iconURL from '../../img/icons/symbols.svg';
import createIconsList from '../common/icons-create';


const addHeaderIcons = () => {
    const iconAttr = { //ваші класи прописати
    iconURL: iconURL,
    iconContainerClass:'social-list-item',
    iconLinkClass:'social-list-link',
    iconClass:'social-list-icon',
}

const container = document.querySelector('.social-list-header');
console.log(container);
createIconsList(container, iconAttr, socialIconsArr);

    const iconAttrMenu = { //ваші класи прописати
    iconURL: iconURL,
    iconContainerClass:'social-list-item',
    iconLinkClass:'social-list-link-menu',
    iconClass:'social-list-icon-menu',
    }
    
const mobileMenu = document.querySelector('.social-list-menu')
createIconsList(mobileMenu, iconAttrMenu, socialIconsArr);
console.log(mobileMenu)
}

export default addHeaderIcons;