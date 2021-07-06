// Setup 
const modal = document.getElementById('addNewPostbtn')
const closeButton = document.querySelectorAll('.modal-close');

// Bind Event Listeners
modal.addEventListener('click', openModall)



//closes modals on opening the site 
all_modals = ['addPost-modal', 'randomPost-modal']
all_modals.forEach((modal)=>{
    const modalSelected = document.querySelector('.'+modal);
    modalSelected.classList.remove('fadeIn');
    modalSelected.classList.add('fadeOut');
    modalSelected.style.display = 'none';
})