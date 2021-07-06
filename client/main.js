// function openModall() {
//     console.log("Clicked")
// }

const openModall = () => {
    console.log("Clicked")
}

// Close Modal 
const modalClose = (modal) => {
    const modalToClose = document.querySelector('.'+modal);
    modalToClose.classList.remove('fadeIn');
    modalToClose.classList.add('fadeOut');
    setTimeout(() => {
        modalToClose.style.display = 'none';
    }, 500);
}


//Open Modal 
const openModal = (modal) => {
    const modalToOpen = document.querySelector('.'+modal);
    modalToOpen.classList.remove('fadeOut');
    modalToOpen.classList.add('fadeIn');
    modalToOpen.style.display = 'flex';
}

//Submitting a new Fact 
function submitFact(e){
    e.preventDefault();
    let add = e.target.fact.value
    function appendMessage(){
               msgText2 = 'https://www.google.com/search?q=' + add 
               window.location.href = msgText2;
    };
    appendMessage()
}

       




//     const factData = {
//         fact: e.target.fact.value
//     }

//     const options = { 
//         method: 'POST',
//         body: JSON.stringify(catData),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };

//     fetch('http://localhost:3000/facts', options)
//         .then(r => r.json())
//         .then(appendFact)
//         .catch(console.warn)
    
// }

function appendFacts(Facts){
    Facts.forEach(appendCat);
};

function appendCat(catData){
//a function to append cats to the top of the list
};


module.exports = {
    modalClose,
    openModal,
    openModall, 
    submitFact, 
    appendFacts
}