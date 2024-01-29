import socialIconsArr from '../icons/icons-list';
import iconURL from '../../img/icons/symbols.svg';
import createIconsList from '../common/icons-create';


const addHeaderIcons = () => {
    const iconAttr = { 
    iconURL: iconURL,
    iconContainerClass:'social-list-item',
    iconLinkClass:'social-list-link',
    iconClass:'social-list-icon',
}

const container = document.querySelector('.social-list-header');
createIconsList(container, iconAttr, socialIconsArr);

    const iconAttrMenu = { 
    iconURL: iconURL,
    iconContainerClass:'social-list-item',
    iconLinkClass:'social-list-link-menu',
    iconClass:'social-list-icon-menu',
    }
    
const mobileMenu = document.querySelector('.social-list-menu')
createIconsList(mobileMenu, iconAttrMenu, socialIconsArr);
}

export default addHeaderIcons;