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

)};