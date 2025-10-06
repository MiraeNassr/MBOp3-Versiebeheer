document.addEventListener('DOMContentLoaded', ()=> {

    const propertyListContainer = document.querySelector('.property-list');
    const currentPostcodeSpan = document.getElementById('current-postcode');

    //read the postcode ...
    const urlPraram = new URLSearchParams(window.location.search);
    const postcode = urlPraram.get('postcode');

    if (!postcode) {
        currentPostcodeSpan.textContent = 'Onbekend';
        propertyListContainer.innerHTML = '<p>Geen postcode gevonden in de zoekopdracht.</p>';
        return;
    }

    currentPostcodeSpan.textContent = postcode;

 //filter for the data 
    const fetchFilteredHouses = async () => {
        try{
            //To send the postcode and call it in the php file
            const response = await fetch(`php/search_houses.php?postcode=${postcode}`);

            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const houses = await response.json();
            propertyListContainer.innerHTML = '';
              
            if (houses.length === 0) { 
                 propertyListContainer.innerHTML = `<p>Er zijn geen woningen gevonden voor de postcode: <strong>${postcode}</strong>.</p>`;
            return;
        }
 //HTML build 
        houses.forEach(house => {
            const cardHTML = `<div class ="property-card" data-id="${house.id}">
                    <img src="${house.image}" alt="Huis in ${house.location}">
                    <h3 class="property-price">${house.price}</h3>
                    <p class="property-desc">${house.description}</p>
                    <p class="property-location">${house.location}</p>
                    <button class="meer-info-btn">Meer info</button> 
                </div>`;
                propertyListContainer.innerHTML += cardHTML;
        });
        attachEventListeners();
    }catch (error) {
        console.error('Fout bij het ophalen van gegevens:' , error);
        propertyListContainer.innerHTML = '<p>Er is een technische fout opgetreden bij het ophalen van de zoekresultaten.</p>';   
    }
});