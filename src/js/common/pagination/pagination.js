class Pagination {
  currentPage = 1;
  totalPages = 0;
  #dotsRef;
  #maxPages = 10;
  #dotDefaultClass = 'pagination-dot';
  #dotActiveClass = 'active-paggination-dot';
  galleryHandle;
  filter = { filter: '' };
  keyWord = '';

  constructor({
    galleryHandle,
    filter,
    dotsSelector,
    dotDefaultClass,
    dotActiveClass,
  }) {
    this.galleryHandle = galleryHandle;
    this.filter = filter;
    this.#dotActiveClass = dotActiveClass;
    this.#dotDefaultClass = dotDefaultClass;
    this.#dotsRef = document.querySelector(dotsSelector);
    this.#dotsRef.addEventListener('click', this.onDotsClick.bind(this));
  }

  init(galleryHandle, filter, totalPages = 0) {
    this.galleryHandle = galleryHandle;
    this.totalPages = totalPages > this.#maxPages ? this.#maxPages : totalPages;
    this.filter = filter;
    this.#createDots();
  }

  reset(galleryHandle, filter, currPage = 1, keyWord = '', totalPages = 0) {
    this.galleryHandle = galleryHandle;
    this.totalPages = totalPages;
    this.currentPage = currPage;
    this.filter = filter;
    this.keyWord = keyWord;
    this.#deleteDots();
  }

  destroy() {
    this.#dotsRef.removeEventListener('click', this.onDotsClick.bind(this));
    this.#deleteDots();
  }

  async updateGallery() {
    try {
      await this.galleryHandle(
        this.filter,
        this.currentPage,
        this.keyWord,
        this.totalPages
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  #createDots() {
    this.#dotsRef.innerHTML = '';

    let strMarkup = '';
    for (let ind = 0; ind < this.totalPages; ind += 1) {
      strMarkup += `
       <li class="${this.#dotDefaultClass}" data-ind="${ind + 1}">${
        ind + 1
      }</li>
      `;
    }
    this.#dotsRef.innerHTML = strMarkup;
    this.#dotsRef.children[this.currentPage - 1].classList.add(
      this.#dotActiveClass
    );
  }

  #deleteDots() {
    this.#dotsRef.innerHTML = '';
  }

  onDotsClick(event) {
    const element = event.target;
    if (!element.classList.contains(this.#dotDefaultClass)) return;
    const index = parseInt(element.dataset.ind, 10);
    this.currentPage = index;
    this.updateDisplayDots();
    this.updateGallery();
  }

  updateDisplayDots() {
    const dots = this.#dotsRef.querySelectorAll('li');
    dots.forEach(element => {
      element.classList.remove(this.#dotActiveClass);
    });

    dots[this.currentPage - 1].classList.add(this.#dotActiveClass);
  }
}

export default Pagination;
