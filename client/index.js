
//closes modals on opening the site 

all_modals = ['addPost-modal', 'randomPost-modal']
all_modals.forEach((modal)=>{
    const modalSelected = document.querySelector('.'+modal);
    modalSelected.classList.remove('fadeIn');
    modalSelected.classList.add('fadeOut');
    modalSelected.style.display = 'none';
})

