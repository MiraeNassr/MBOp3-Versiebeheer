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

    }

)};