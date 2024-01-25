const galleryCreate = (data, galleryRef, markupFn) => {
  galleryRef.innerHTML = '';
  if (!data.length) {
    //TODO Default image
    console.log(
      'Sorry, there are no data matching your search query. Please, try again!'
    );
  }
  const strMarkup = markupFn(data);
  galleryRef.innerHTML = '';
  galleryRef.insertAdjacentHTML('beforeend', strMarkup);
  galleryRef.classList.remove('isually-hidden');
};

export default galleryCreate;
