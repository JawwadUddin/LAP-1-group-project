const modalClose = () => {
modal.classList.remove('fadeIn');
modal.classList.add('fadeOut');
setTimeout(() => {
    modal.style.display = 'none';
}, 500);
}

const modalClose = () => {
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

const openModal = () => {
    console.log("Clicked")
    // modal.classList.remove('fadeOut');
    // modal.classList.add('fadeIn');
    // modal.style.display = 'flex';
}


for (let i = 0; i < closeButton.length; i++) {

    const elements = closeButton[i];

    elements.onclick = (e) => modalClose();

    modal.style.display = 'none';

    window.onclick = function (event) {
        if (event.target == modal) modalClose();
    }
}

module.exports = {
    modalClose,
    openModal,
}