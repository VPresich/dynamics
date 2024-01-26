const galleryDelete = galleryRef => {
  galleryRef.innerHTML = '';
  galleryRef.classList.add('visually-hidden');
};

export default galleryDelete;
