import socialIconsArr from '../icons/icons-list';
import iconURL from '../../img/icons/symbols.svg';
import createIconsList from '../common/icons-create';
const iconAttr = {
  iconURL: iconURL,
  iconContainerClass: 'social-item-footer',
  iconLinkClass: 'social-link-footer',
  iconClass: 'social-icon',
};

const container = document.querySelector('.social-list');
createIconsList(container, iconAttr, socialIconsArr);
