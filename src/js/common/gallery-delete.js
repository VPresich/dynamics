const galleryDelete = galleryRef => {
  galleryRef.innerHTML = '';
  galleryRef.classList.add('isually-hidden');
};

export default galleryDelete;
