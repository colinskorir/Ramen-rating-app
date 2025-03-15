function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newRamen = {
            id: nextId++,
            name: document.getElementById('new-name').value,
            restaurant: document.getElementById('new-restaurant').value,
            image: 'default.jpg',
            rating: parseInt(document.getElementById('new-rating').value),
            comment: document.getElementById('new-comment').value
        };

        ramens.push(newRamen);
        displayRamens(); 
        form.reset(); 
    });
}
function main() {
    displayRamens();
    addSubmitListener();
    
    if (ramens.length > 0) {
        const firstRamenImg = document.querySelector('#ramen-menu img');
        firstRamenImg.click(); 
    }
}

document.addEventListener('DOMContentLoaded', main);
