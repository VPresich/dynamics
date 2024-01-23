function exerciseFiltersMarkup(books) {
  return books.reduce(
    (strMarkup, { id, title, titleimage, author, price, pointer }) =>
      strMarkup +
      `
      <li class="" data-id="${id}">
            <img
              src="${titleimage}"
              alt="book "
              width="400"
            />
            <p class="book-title">${title}</p>
            <p class="book-author">${author}</p>
            <p class="book-price">${price}</p>
            <div class="pointer-block">
              <input type="number" placeholder="${pointer}" />
              <button class="save" type="submit" data-id="${id}">Save</button>
            </div>
            <button class="delete" data-id="${id}">X</button>
          </li>
      `,
    ''
  );
}

export default exerciseFiltersMarkup;
