function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newRamen = {
            id: nextId++,
            name: document.getElementById('new-name').value,
            restaurant: document.getElementById('new-restaurant').value,
            image: 'images',
            rating: parseInt(document.getElementById('new-rating').value),
            comment: document.getElementById('new-comment').value
        };

        ramens.push(newRamen);
        displayRamens(); 
        form.reset(); 
    });
}

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = '';
    ramens.forEach(ramen => {
        const ramenImg = document.createElement('img');
        ramenImg.src = ramen.image;
        ramenImg.alt = ramen.name;
        ramenImg.addEventListener('click', () => displayRamenDetails(ramen));
        ramenMenu.appendChild(ramenImg);
        
    })
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
