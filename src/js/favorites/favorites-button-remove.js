export default function getRemovButton(rating, url, _id) {
  return `<div><button id="${_id}" class="favorites-button-remove" type="button">
  <svg id="${_id}" class="favorites-icon-trash">
  <use href="${url}#icon-trash-favotites"></use>
</svg>
  </button></div>`;
}
