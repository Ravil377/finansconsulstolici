const modalOpenBtns = document.querySelectorAll('[data-id="modal"]');
const modalCloseBtns = document.querySelectorAll('.modal__close-js');
const modal = document.querySelector('.modal-js');

const closeModal = () => {
    document.querySelector('.modal__form-js').reset();
    modal.classList.remove('modal_opened');
}

const checkKeyPress = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
};
  
const checkPressOverlay = (e) => {
    if (e.target === modal) {
        closeModal();
    }
};
  
const openModal = () => {
    modal.classList.add('modal_opened');
    
}

modalCloseBtns.forEach(btn=>btn.addEventListener('click', closeModal));

document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalOpenBtns.forEach(btn => btn.addEventListener('click', openModal));
