const openModalBtn = document.querySelector('.nav-menu__toggler');
const elementModal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close');

function openModal() {
  elementModal.classList.add('modal_active');
}

function closeModal() {
  elementModal.classList.remove('modal_active');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);