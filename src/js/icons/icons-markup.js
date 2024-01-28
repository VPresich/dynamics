function iconsListMarkup(iconAttr, icons = []) {
    const {
    iconURL,
    iconContainerClass,
    iconLinkClass,
    iconClass,
    } = iconAttr;
  return icons.reduce(
      (
          strMarkup,
          {
              url,
              id,
              label,
              hrefTag,
          }
      ) => {
          return strMarkup +
              `
        <li class="${iconContainerClass}">
            <a class="${iconLinkClass}" target="_blank" rel="noopener" href="${url}">
            <svg class="${iconClass}" aria-label="${label}" id=${id}>
                <use href="${iconURL}#${hrefTag}"></use>
            </svg>
            </a>
        </li>
      `},
    ''
  );
}

export default iconsListMarkup;
