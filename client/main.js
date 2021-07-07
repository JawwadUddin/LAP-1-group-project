// Setup 
const form = document.querySelector('#new-fact-form');

// Bind Event Listeners
form.addEventListener('submit', submitForm);

//closes modals on opening the site 
all_modals = ['addPost-modal', 'randomPost-modal']
all_modals.forEach((modal)=>{
    const modalSelected = document.querySelector('.'+modal);
    modalSelected.classList.remove('fadeIn');
    modalSelected.classList.add('fadeOut');
    modalSelected.style.display = 'none';
})

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
function submitForm(event) {
    event.preventDefault();
    // let title = event.target.facttitle.value;
    let fact = event.target.fact.value;
    // console.log(fact)
    // console.log(title)
    postData(fact)
}   
async function postData(fact){
    let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({fact})
    }
    let response = await fetch('http://localhost:3000/journalentries', options);
    console.log(response)
    let responseJSON = await response.json();
    // console.log(responseJSON)
    getItems();
}

async function getItems(){
    let response = await fetch('http://localhost:3000/journalentries');
    let items  = await response.json();
    console.log(items)
    main.textContent = '';
    items.forEach(item => createCard(item));
}

function createCard(item) {
    let div1 = document.createElement("div");
    div1.className = "container border shadow m-4 w-auto rounded-2xl overflow-hidden bg-white font-light relative";

    let img1 = document.createElement("img");
    img1.setAttribute('src','https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2020/08/Easter-Island-heads.jpg?resize=500%2C333&ssl=1');

    let div2 = document.createElement("div");
    div2.className = "tags font-light bg-red-500 px-3 py-1 w-16 text-center text-white rounded-full text-sm absolute top-52 left-3 mt-1 tracking-wider";
    div2.textContent = "World";

    let div3 = document.createElement("div");
    div3.className = "container-content p-4";

    let h2 = document.createElement("h2");
    h2.textContent = item.title;
    h2.className = "mb-2 font-semibold"

    let p = document.createElement("p");
    p.textContent = item.fact;

    let div4 = document.createElement("div");
    div4.className = "container-response flex justify-between p-4 pt-0";

    let img2 = document.createElement("img");
    img2.setAttribute('src','../assets/images/speech-balloon.png');
    img2.className = "w-6";

    let div5 = document.createElement("div");
    div5.className = "emojis flex";

    let img3 = document.createElement("img");
    img3.setAttribute('src','../assets/images/heart.png');
    img3.className = "w-6 ml-2"

    let img4 = document.createElement("img");
    img4.setAttribute('src','../assets/images/joy.png');
    img4.className = "w-6 ml-2"
    
    let img5 = document.createElement("img");
    img5.setAttribute('src','../assets/images/lie.png');
    img5.className = "w-6 ml-2"

    document.querySelector("main").appendChild(div1)
    div1.appendChild(img1);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div3.appendChild(h2);
    div3.appendChild(p);
    div4.appendChild(img2);
    div4.appendChild(div5);
    div5.appendChild(img3);
    div5.appendChild(img4);
    div5.appendChild(img5);
}
