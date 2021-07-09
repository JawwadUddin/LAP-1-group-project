async function loadingCards(){
    let response = await fetch('http://localhost:3000/journalentries');
    console.log(response);
    let items  = await response.json();
    items.forEach(item => createCard(item))
}

module.exports = {loadingCards};