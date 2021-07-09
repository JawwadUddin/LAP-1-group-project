loadingCards()

// Setup 
const form = document.querySelector('#new-fact-form');
const main = document.querySelector("main");

// Bind Event Listeners
form.addEventListener('submit', submitForm);

 // // Setup 
                    const formgif = document.querySelector('#searchbargif');

                    // // Bind Event Listeners
                    formgif.addEventListener('submit', searchgiphy);

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
    let set = document.getElementById("image_post_div")
    set.setAttribute('class', "hidden flex h-48")
}

//Open Modal 
const openModal = (modal) => {
    const modalToOpen = document.querySelector('.'+modal);
    modalToOpen.classList.remove('fadeOut');
    modalToOpen.classList.add('fadeIn');
    modalToOpen.style.display = 'flex';
    let set2 = document.getElementById("image_post")
    set2.setAttribute('src', 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg')
}

//testfnc
function addgifbtnclicked() {
    let sect = document.getElementById('searchbargif') 
    sect.setAttribute('class', ' searchbox flex justify-center my-1 pb-3')
    let sect2 = document.getElementById('buttons_post') 
    sect2.setAttribute('class', 'flex justify-between pt-4 text-xs mb-8')
    let sect3 = document.getElementById('fact') 
    sect3.setAttribute('class', 'py-5 px-2 text-gray-900 outline-none block h-40 w-full overflow-auto')
    let sect4 = document.getElementById('factheader') 
    sect4.setAttribute('class', 'px-2 pt-2 text-gray-900 outline-none block h-10 w-full overflow-auto')
    let sect5 = document.getElementById('image_post_div') 
    sect5.setAttribute('class', 'flex h-48')
}


function clickedSearch() {
    let sect = document.getElementById('searchbargif') 
    sect.setAttribute('class', 'hidden searchbox flex justify-center my-1 pb-3')
}


function searchgiphy(e) {
    e.preventDefault(); //Stops page reloading
    const APIkey = "HpcUur5hV9cdZ2qYv8leJeyCMimbVkPX"
    let query = e.target.inputGIF.value
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${query}&limit=1&rating=g&lang=en`
    console.log(url)
    fetch(url)
        .then(response => response.json()) // get responses
        .then(content => {
            // console.log(content.data)
            let outputGifs = document.querySelector("#image_post")
            outputGifs.src = content.data[0].images.fixed_width.url;
            outputGifs.alt = content.data[0].title;
            document.querySelector("#inputGIF").value = ""
        })
        .catch(err => { console.error(err) })
}

//Submitting a new Fact 
function submitForm(event) {
    event.preventDefault();
    let fact = event.target.fact.value;
    let factheader = event.target.factheader.value;
    let outputGifs = document.querySelector("#image_post");
    postData(fact, factheader, outputGifs.src);
    // let forms = document.getElementById("new-fact-form")
    form.reset()
}   
async function postData(fact, factheader, src){
    let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({fact, factheader, src})
    }
    let response = await fetch('https://factori.herokuapp.com/journalentries', options);
    // console.log(response)
    let responseJSON = await response.json();
    // console.log(responseJSON)
    getItems(fact, factheader, src);
}

async function loadingCards(){
    let response = await fetch('https://factori.herokuapp.com/journalentries');
    console.log(response);
    let items  = await response.json();
    items.forEach(item => createCard(item))
}

async function getItems(){
    let response = await fetch('https://factori.herokuapp.com/journalentries');
    console.log(response);
    let items  = await response.json();
    console.log(items)
    createCard(items[items.length-1])
}

function createCard(item) {
    
    let div1 = document.createElement("div");
    div1.className = "flex m-5 lg:w-1/4";

    let div2 = document.createElement("div");
    div2.className = "flex flex-col h-full border max-w-lg shadow-sm mx-auto bg-white rounded-3xl w-11/12";

    if (item.src !== "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg") {
        let img1 = document.createElement("img");
        img1.className = "rounded-3xl rounded-b-none w-full object-cover";
        img1.setAttribute('src', item.src);
        img1.setAttribute('alt','Fact Image');
        img1.setAttribute('loading','lazy');
        div2.appendChild(img1);
    }

    let div3 = document.createElement("div");
    div3.className = "flex justify-between -mt-4 px-4";

    let span1 = document.createElement("span");
    span1.setAttribute('id', 'facttag');
    span1.textContent = "World";
    span1.className = "inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-medium tracking-wide text-white px-3 pt-0";

    let span2 = document.createElement("span");
    span2.className = "flex h-min space-x-1 items-center rounded-full  bg-white py-1 px-2 text-sm font-medium";
    
    let p1 = document.createElement("p");
    p1.className = "text-center";
    p1.setAttribute('id', 'time');
    p1.textContent = item.date;

    let div4 = document.createElement("div");
    div4.className = "py-2 px-4";

    let h1 = document.createElement("h1");
    h1.className = "text-lg font-medium leading-6 tracking-wide";
    h1.textContent = item.title;

    let div5 = document.createElement("div");
    div5.className = "space-y-2 px-4 font-light";

    let p2 = document.createElement("p");
    p2.textContent = item.content;

    let div6 = document.createElement("div");
    div6.className = "flex flex-row items-end h-full w-full px-4 mt-4 pt-3";

    let div7 = document.createElement("div");
    div7.className = "flex border-t border-gray-200 w-full py-2";

    let div8 = document.createElement("div");
    div8.className = "flex justify-between p-4 pt-0";
    div8.setAttribute('id', `${item.id}emotesection`);

    // let svg1 = document.createElement("svg");
    // svg1.className = "ml-1";
    // svg1.setAttribute('version', '1.1');
    // svg1.setAttribute('height', '25');
    // svg1.setAttribute('id', 'Layer_1');
    // svg1.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // svg1.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    // svg1.setAttribute('x', '0px');
    // svg1.setAttribute('y', '0px');
    // svg1.setAttribute('viewBox', '0 0 512 512');
    // svg1.setAttribute('style', 'enable-background:new 0 0 512 512;');
    // svg1.setAttribute('xml:space', 'preserve');

    // let path1 = document.createElement("path");
    // path1.setAttribute('d', 'M256,32C114.9,32,0,132.5,0,256c0,50.6,19.3,99.2,54.8,138.2L3.9,453.6c-4.1,4.7-5,11.4-2.4,17.1c2.6,5.7,8.3,9.3,14.5,9.3h240c141.2,0,256-100.5,256-224S397.2,32,256,32z');
    // path1.setAttribute('style', 'fill: #8B5CF6');
    
    // let g1 = document.createElement("g");
    // let circle1 = document.createElement("circle");
    // circle1.setAttribute('cx','256');
    // circle1.setAttribute('cy','256');
    // circle1.setAttribute('r','32');

    // let circle2 = document.createElement("circle");
    // circle2.setAttribute('cx','128');
    // circle2.setAttribute('cy','256');
    // circle2.setAttribute('r','32');

    // let circle3 = document.createElement("circle");
    // circle3.setAttribute('cx','384');
    // circle3.setAttribute('cy','256');
    // circle3.setAttribute('r','32');

    let img2 = document.createElement("img");
    img2.setAttribute('src', './assets/images/message2.svg');
    img2.setAttribute('onCLick', 'showcomments(parseInt(this.id))');
    img2.className = "message2 w-6";
    img2.setAttribute('id', `${item.id}messages`);

    let img2b = document.createElement("img");
    img2b.setAttribute('src', './assets/images/message2.svg');
    img2b.setAttribute('onCLick', 'hidecomments(parseInt(this.id))');
    img2b.className = "message2 w-6 hidden";
    img2b.setAttribute('id', `${item.id}hidden`);

    let div9 = document.createElement("div");
    div9.className = "flex";

    // let svg2 = document.createElement("svg");
    // svg2.className = "mx-1";
    // svg2.setAttribute('version', '1.1');
    // svg2.setAttribute('height', '25');
    // svg2.setAttribute('id', 'Layer_1');
    // svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // svg2.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    // svg2.setAttribute('x', '0px');
    // svg2.setAttribute('y', '0px');
    // svg2.setAttribute('viewBox', '0 0 512 512');
    // svg2.setAttribute('style', 'enable-background:new 0 0 512 512;');
    // svg2.setAttribute('xml:space', 'preserve');

    // let g2 = document.createElement("g");
    // g2.setAttribute('id', 'BG');

    // let path2 = document.createElement("path");
    // path2.setAttribute('d', 'MM256,512L256,512C114.6,512,0,397.4,0,256l0,0C0,114.6,114.6,0,256,0l0,0c141.4,0,256,114.6,256,256l0,0C512,397.4,397.4,512,256,512z');
    // path2.setAttribute('style', 'fill: #BFDBFE');

    // let g3 = document.createElement("g");
    // g3.setAttribute('id', 'bold_v2');

    // let path3 = document.createElement("path");
    // path3.setAttribute('d', 'M256.1,0.2C114.9,0.2,0.2,114.9,0.2,256.1s114.7,255.9,255.9,255.9s255.9-114.7,255.9-255.9S397.2,0.2,256.1,0.2z M65,168.1c1.8-5.8,6.8-10,13-10.8l39.6-5.8l17.6-35.8c5.4-11,23.2-11,28.8,0l17.6,35.8l39.6,5.8c6,0.8,11,5,13,10.8c2,5.8,0.4,12.2-4,16.4l-28.6,28l6.8,39.4c1,6-1.4,12-6.4,15.6c-2.8,2-6,3-9.4,3c-2.6,0-5.2-0.6-7.4-1.8l-35.4-18.6l-35.4,18.6c-5.4,2.8-12,2.4-16.8-1.2c-5-3.6-7.4-9.6-6.4-15.6l6.8-39.4l-28.6-28C64.6,180.3,63,173.9,65,168.1L65,168.1z M256.1,452.8c-62.6,0-119.1-30.4-153.9-79.4H410C375.2,422.4,318.6,452.8,256.1,452.8L256.1,452.8z M436.8,319.4c-2.4,7.6-5.2,14.8-8.4,22H84c-3.2-7.2-6.2-14.4-8.4-22c-1.6-4.8-0.6-10,2.6-14c3-4.2,7.6-6.6,12.8-6.6h330.4c5.2,0,9.8,2.4,12.8,6.6C437.4,309.4,438.2,314.4,436.8,319.4z M414.6,212.5l6.8,39.4c1,6-1.4,12-6.4,15.6c-2.8,2-6,3-9.4,3c-2.6,0-5.2-0.6-7.4-1.8l-35.4-18.6l-35.4,18.6c-5.4,2.8-12,2.4-16.8-1.2c-5-3.6-7.4-9.6-6.4-15.6l6.8-39.4l-28.6-28c-4.4-4.2-6-10.6-4-16.4c1.8-5.8,6.8-10,13-10.8l39.6-5.8l17.6-35.8c5.4-11,23.2-11,28.8,0l17.6,35.8l39.6,5.8c6,0.8,11,5,13,10.8c2,5.8,0.4,12.2-4,16.4L414.6,212.5z');
    // path3.setAttribute('style', 'fill: #3B82F6');

    let img3 = document.createElement("img");
    img3.setAttribute('src', './assets/images/starred.svg');
    img3.setAttribute('onCLick', 'reactBtn(this.id)');
    img3.className = "starred w-6 ml-2";
    img3.setAttribute('id', `${item.id}a`);
    let p3 = document.createElement("p");
    p3.className = "ml-2 font-light bg-gray-200 rounded-full px-2";
    p3.setAttribute('id', `${item.id}acounter`);
    p3.textContent = item.reactions[0];

    // let svg3 = document.createElement("svg");
    // svg3.className = "mx-1";
    // svg3.setAttribute('version', '1.1');
    // svg3.setAttribute('height', '25');
    // svg3.setAttribute('id', 'Layer_1');
    // svg3.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // svg3.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    // svg3.setAttribute('x', '0px');
    // svg3.setAttribute('y', '0px');
    // svg3.setAttribute('viewBox', '0 0 512 512');
    // svg3.setAttribute('style', 'enable-background:new 0 0 512 512;');
    // svg3.setAttribute('xml:space', 'preserve');

    // let g4 = document.createElement("g");
    // g4.setAttribute('id', 'BG');

    // let path4 = document.createElement("path");
    // path4.setAttribute('d', 'M253.9,508L253.9,508C114.8,507.9,2.1,394.7,2.2,255.2l0,0C2.4,115.6,115.3,2.7,254.4,2.8l0,0C393.6,3,506.3,116.2,506.1,255.7l0,0C506,395.2,393.1,508.2,253.9,508z');
    // path4.setAttribute('style', 'fill: #FBCFE8');

    // let g5 = document.createElement("g");
    // g5.setAttribute('id', 'bold_v2');

    // let path5 = document.createElement("path");
    // path5.setAttribute('d', 'M496.4,170.6c2.4-6.4,3.4-13.2,3.4-20.4c0-31.7-22.7-58.3-53.1-64c-3.4-4-6.8-7.6-10.2-11.2C337-24.4,174.8-24.4,75.2,75c-99.4,99.6-99.4,261.8,0,361.1c3.6,3.4,7.2,6.8,11.2,10.2c6,30.3,32.5,53.3,64.2,53.3c7.2,0,14-1,20.4-3.4c27.9,10,56.7,15,85.4,15c66.2,0,131.1-25.7,180.4-75C506.6,366.3,529.3,263.3,496.4,170.6L496.4,170.6zM457.3,150.2c0,12.6-10.2,22.7-22.9,22.7c-6.8,0-26.5-9.6-48.7-22.7c22.1-13.2,41.9-22.7,48.7-22.7C447.1,127.5,457.3,137.6,457.3,150.2z M240.6,95.1c1.6-8.8,9.8-14.4,18.4-13c8.8,1.6,14.8,9.8,13,18.6l-2,11.2l-5.4,30.3l30.3-5.4l11.2-2c9-1.6,17,4.2,18.6,12.8c0.2,0.8,0.2,1.6,0.2,2.6v0.2c0,7.6-5.4,14.4-13.2,15.8l-63.8,11.2c-1,0.2-2,0.2-3,0.2c-4,0-8-1.6-11.2-4.8c-3.6-3.6-5.4-8.8-4.2-14L240.6,95.1z M95.6,240.2l63.8-11.6c5.4-0.8,10.4,0.8,14,4.4c3.8,3.8,5.6,9,4.4,14l-11.2,64c-1.2,7.6-8,13.2-15.6,13.2c-1,0-2,0-3-0.2c-8.6-1.6-14.4-9.8-12.8-18.6l2-11.2l5.4-30.3l-30.3,5.4l-11.2,2c-9,1.6-17-4.2-18.6-13C81,250,86.8,241.8,95.6,240.2L95.6,240.2z M150.6,456.9c-12.6,0-22.7-10.2-22.7-22.9c0-6.8,9.6-26.5,22.7-48.7c13.2,22.1,22.7,41.9,22.7,48.7C173.4,446.5,163.2,456.9,150.6,456.9z M394.9,394.2c-35.7,35.7-83.4,55.1-132.9,55.1c-13.4,0-26.7-1.6-40.5-4.2c-2.2-0.4-4.2-1-6.4-1.6c0.6-3,0.8-6.4,0.8-9.6c0-15-10-37.1-21.1-57.1l182.4-182.4c20,11.2,42.1,21.1,57.1,21.1c3.2,0,6.6-0.2,9.6-0.8c0.6,2.2,1.2,4.2,1.6,6.6C459.3,284.1,440.3,348.7,394.9,394.2z');
    // path5.setAttribute('style', 'fill: #EC4899');

    let img4 = document.createElement("img");
    img4.setAttribute('src', './assets/images/lol.svg');
    img4.setAttribute('onCLick', 'reactBtn(this.id)');
    img4.className = "lol w-6 ml-2";
    img4.setAttribute('id', `${item.id}b`);
    let p4 = document.createElement("p");
    p4.className = "ml-2 font-light bg-gray-200 rounded-full px-2";
    p4.setAttribute('id', `${item.id}bcounter`)
    p4.textContent = item.reactions[1];

    // let svg4 = document.createElement("svg");
    // svg4.className = "ml-1";
    // svg4.setAttribute('version', '1.1');
    // svg4.setAttribute('height', '25');
    // svg4.setAttribute('id', 'Layer_1');
    // svg4.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // svg4.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    // svg4.setAttribute('x', '0px');
    // svg4.setAttribute('y', '0px');
    // svg4.setAttribute('viewBox', '0 0 512 512');
    // svg4.setAttribute('style', 'enable-background:new 0 0 512 512;');
    // svg4.setAttribute('xml:space', 'preserve');

    // let g6 = document.createElement("g");
    // g6.setAttribute('id', 'BG');

    // let path6 = document.createElement("path");
    // path6.setAttribute('d', 'M247.4,473.6L247.4,473.6C113.9,473.6,5.6,371.5,5.6,245.4l0,0c0-126.1,108.2-228.3,241.8-228.3l0,0c133.6,0,241.8,102.2,241.8,228.3l0,0C489.2,371.5,381,473.6,247.4,473.6z');
    // path6.setAttribute('style', 'fill: #FECACA');

    // let g7 = document.createElement("g");
    // g7.setAttribute('id', 'bold_v2');

    // let path7 = document.createElement("path");
    // path7.setAttribute('d', 'M490.1,256.9c0.4-3.4,0.4-7,0.4-10.4c0-135.1-109.9-245.2-245.2-245.2S0.4,111.4,0.4,246.5s109.9,245.2,245.2,245.2c95.5,0,180.2-53.9,221-139.1c25.6-3.8,45.4-26,45.4-52.7C511.9,282,503.3,266.4,490.1,256.9zM311.3,429.9c-3.2,3.2-7.2,4.8-11.2,4.8s-8.2-1.6-11.4-4.8c-5.8-5.8-13.2-9.8-21.4-11.2c-6.4-1.6-13.4-1.6-20,0c-8,1.6-15.6,5.6-21.4,11.2c-6.2,6.2-16.4,6.2-22.6,0c-6.2-6.2-6.2-16.4,0-22.6c28.8-28.8,79.1-28.8,107.9,0C317.5,413.5,317.5,423.9,311.3,429.9z M192.2,171.9c0,23.4-19.2,42.6-42.6,42.6s-42.6-19.2-42.6-42.6s19.2-42.6,42.6-42.6C173,129.2,192.2,148.4,192.2,171.9z M320.1,171.9c0-23.4,19.2-42.6,42.6-42.6c23.4,0,42.6,19.2,42.6,42.6s-19.2,42.6-42.6,42.6C339.3,214.5,320.1,195.3,320.1,171.9z M461.1,320.8c-0.8,0.2-1.6,0.2-2.6,0.2h-12.8h-195v-42.6h207.8c0.6,0,1.6,0,2.2,0.2c3.6,0.2,6.8,1.6,9.6,3.2l3.6,3.2c3.6,3.8,6,9,6,14.8c0,7.6-4,14.4-10.2,18.2C467.1,319.6,464.3,320.4,461.1,320.8z');
    // path7.setAttribute('style', 'fill: #EF4444');

    let img5 = document.createElement("img");
    img5.setAttribute('src', './assets/images/lying.svg');
    img5.setAttribute('onCLick', 'reactBtn(this.id)');
    img5.className = "lying w-6 ml-2";
    img5.setAttribute('id', `${item.id}c`);
    let p5 = document.createElement("p");
    p5.className = "ml-2 font-light bg-gray-200 rounded-full px-2";
    p5.setAttribute('id', `${item.id}ccounter`)
    p5.textContent = item.reactions[2];


    document.querySelector("main").appendChild(div1);
    div1.appendChild(div2);
    
    // div2.appendChild(img1);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div2.appendChild(div5);
    div2.appendChild(div6);
    div2.appendChild(div8);

    div3.appendChild(span1);
    div3.appendChild(span2);
    span2.appendChild(p1);

    div4.appendChild(h1);

    div5.appendChild(p2);

    div6.appendChild(div7);

    div8.appendChild(img2);
    div8.appendChild(img2b)
    // svg1.appendChild(path1);
    // svg1.appendChild(g1);
    // g1.appendChild(circle1);
    // g1.appendChild(circle2);
    // g1.appendChild(circle3);
    div8.appendChild(div9);

    div9.appendChild(img3);
    div9.appendChild(p3);
    // svg2.appendChild(g2);
    // svg2.appendChild(g3);
    // g2.appendChild(path2);
    // g3.appendChild(path3);

    div9.appendChild(img4);
    div9.appendChild(p4);
    // svg3.appendChild(g4);
    // svg3.appendChild(g5);
    // g4.appendChild(path4);
    // g5.appendChild(path5);

    div9.appendChild(img5);
    div9.appendChild(p5);
    // svg4.appendChild(g6);
    // svg4.appendChild(g7);
    // g6.appendChild(path6);
    // g7.appendChild(path7);

    // this is the comment section

    let div10 = document.createElement("div");
    div10.className = "hidden";
    div10.setAttribute('id', `${item.id}commentsection`);

    div2.appendChild(div10);

    let div10a = document.createElement("div");
    div10a.setAttribute('id', `${item.id}commentsectiondiv`);

    for (let i=0; i<item.comment.length; i++) {
        let coms = document.createElement("p");
        coms.textContent = item.comment[i];
        coms.className = "border-t border-gray-200 my-2 pb-2 font-light text-center mx-4 pt-2";
        div10a.appendChild(coms);
    }

    div10.appendChild(div10a)

    let div11 = document.createElement("div");
    div10.appendChild(div11);
    div11.className = "flex justify-between mx-4";

    let form = document.createElement("form");
    form.className = "flex justify-between mb-3 w-full"
    form.setAttribute('id', `${item.id}form`)
    div11.appendChild(form);

    let input1 = document.createElement("input");
    let input2 = document.createElement("input");

    input1.setAttribute('type', "text");
    input1.className = "w-full mr-3 pl-4 outline-none font-light border border-gray-300 rounded-full focus:outline-none px-2 focus:border-blue-300 focus:shadow-blue";
    input1.setAttribute('placeholder', "comment here...");
    input1.setAttribute('id', `actualcomment${item.id}`);

    input2.setAttribute('type', "submit");
    input2.className = "comment-button bg-gray-600 text-white p-2 hover:bg-blue-400 cursor-pointer rounded-full";
    input2.setAttribute('value', "");
    input2.setAttribute('id', `${item.id}submitcomment`);

    form.appendChild(input1);
    form.appendChild(input2);

    form.addEventListener('submit', submitcomment)
}

// working on emotes now
function reactBtn(clicked_id)
  {
    let clickedid = clicked_id;
    let pid = clicked_id+"counter";
    
    let ptag = document.getElementById(`${pid}`);
    ptag.innerHTML = parseInt(ptag.innerHTML) + 1;
    console.log(clickedid)
    patchData(clicked_id);
  }

  async function patchData(clicked_id){
    let options = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({clicked_id})
    }
    let response = await fetch('https://factori.herokuapp.com/journalentries', options);
    let responseJSON = await response.json();
}

//getting the comments to work

function showcomments(id) {
    let sect = document.getElementById(`${id}commentsection`)
    sect.setAttribute('class', '')
    let sect2 = document.getElementById(`${id}emotesection`)
    sect2.setAttribute('class', 'flex justify-between px-4 pb-2 pt-0')
    let sect3 = document.getElementById(`${id}messages`)
    sect3.setAttribute('class', 'w-6 hidden')
    let sect4 = document.getElementById(`${id}hidden`)
    sect4.setAttribute('class', 'w-6')
    
}

function hidecomments(id) {
    let sect = document.getElementById(`${id}commentsection`)
    sect.setAttribute('class', 'hidden')
    let sect2 = document.getElementById(`${id}emotesection`)
    sect2.setAttribute('class', 'flex justify-between px-4 mb-3 pb-2 pt-0')
    let sect3 = document.getElementById(`${id}messages`)
    sect3.setAttribute('class', 'w-6')
    let sect4 = document.getElementById(`${id}hidden`)
    sect4.setAttribute('class', 'w-6 hidden')
    
}

function submitcomment(event) {
    event.preventDefault();
    // console.log(event.target)
    let formid = event.target.id;
    let idstart = formid.replace("form", "")
    // console.log(formid)
    // console.log(idstart)
    let divid = `${idstart}commentsectiondiv`;
    let div = document.getElementById(divid);
    let p = document.createElement("p");
    p.className = "border-t border-gray-200 my-2 pb-2 font-light text-center mx-4 pt-2"
    let holder = `actualcomment${idstart}`;
    let h = document.getElementById(holder).value;
    p.textContent = h;
    div.appendChild(p);
    patchcomment(idstart, h)
}       

async function patchcomment(clicked_id, h){
    let options = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({clicked_id, h})
    }
    let response = await fetch('https://factori.herokuapp.com/comments', options);
    let responseJSON = await response.json();
}