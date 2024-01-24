class Pagination {
  #currentPage = 0;
  #totalPages = 0;
  #dotsRef;
  #dotDefaultClass = '';
  #dotActiveClass = '';
  #galleryHandle;
  #filter = 'Muscles';

  constructor({
    galleryHandle,
    dotsSelector,
    dotDefaultClass,
    dotActiveClass,
  }) {
    this.#dotDefaultClass = dotDefaultClass;
    this.#dotActiveClass = dotActiveClass;
    this.#galleryHandle = galleryHandle;
    this.#dotsRef = document.querySelector(dotsSelector);
  }

  destroy() {
    this.#dotsRef.removeEventListener('click', this.onDotsClick.bind(this));
  }

  async updateGallery() {
    try {
      this.#totalPages = await this.#galleryHandle(
        this.#filter,
        this.#currentPage
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  createDots(totalPages) {
    this.#dotsRef.innerHTML = '';
    this.#totalPages = totalPages;
    let strMarkup = '';
    for (let ind = 0; ind < totalPages; ind += 1) {
      strMarkup += `
       <span class="pagination-dot" data-ind="${ind + 1}">${ind + 1}</span>
      `;
      this.#dotsRef.innerHTML = strMarkup;
    }
    this.#dotsRef.addEventListener('click', this.onDotsClick.bind(this));
  }

  onDotsClick(event) {
    const dot = event.target;
    const index = parseInt(dot.dataset.ind, 10);
    this.#currentPage = index;
    this.updateGallery();
    this.updateDisplayDots(event.target);
  }

  updateDisplayDots(activeDot) {
    const children = this.#dotsRef.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove(this.#dotActiveClass);
    }
    console.log(activeDot);
    activeDot.classList.add(this.#dotActiveClass);
  }
}

export default Pagination;
