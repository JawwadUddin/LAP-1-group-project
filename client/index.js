const formgif = document.querySelector('#searchbargif');

// Bind Event Listeners
formgif.addEventListener('submit', searchgiphy);
//closes modals on opening the site 

all_modals = ['addPost-modal', 'randomPost-modal']
all_modals.forEach((modal)=>{
    const modalSelected = document.querySelector('.'+modal);
    modalSelected.classList.remove('fadeIn');
    modalSelected.classList.add('fadeOut');
    modalSelected.style.display = 'none';
})


                    // Setup 
                    const formgif = document.querySelector('#searchbargif');

                    // Bind Event Listeners
                    formgif.addEventListener('submit', searchgiphy);
