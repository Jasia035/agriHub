
function filterCrops() {
    let input = document.getElementById('cropSearch').value.toLowerCase();
    let grid = document.getElementById('cropGrid');
    let cards = grid.getElementsByClassName('card');

    for (let card of cards) {
        let title = card.getElementsByTagName('h3')[0].innerText.toLowerCase();
        let desc = card.getElementsByTagName('p')[0].innerText.toLowerCase();
        
        if (title.includes(input) || desc.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}


function filterPests() {
    let input = document.getElementById('pestSearch').value.toLowerCase();
    let grid = document.getElementById('pestGrid');
    let cards = grid.getElementsByClassName('card');

    for (let card of cards) {
        let title = card.getElementsByTagName('h3')[0].innerText.toLowerCase();
        let desc = card.getElementsByTagName('p')[0].innerText.toLowerCase();
        
        if (title.includes(input) || desc.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your request has been received. An agricultural expert will contact you shortly.`);
    this.reset();
});