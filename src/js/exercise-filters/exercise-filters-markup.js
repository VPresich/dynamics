function exerciseFiltersMarkup(filters = []) {
  return filters.reduce(
    (strMarkup, { imgUrl, name, filter }) =>
      strMarkup +
      `
      <li class="filter-card" data-filter">
          <img src="${imgUrl}" alt="Image of: ${filter}"/>
          <div class="filter-label">
          <p class="filter-name">${name}</p>
          <p class="filter-type">${filter}</p>            
          </div>
      </li>
      `,
    ''
  );
}

export default exerciseFiltersMarkup;
