document.addEventListener('DOMContentLoaded', function () {
    // Carousel functionaliteit
    const carousel = document.querySelector('.section2 ul');
    const listItems = carousel.children;
    let itemWidth = listItems[0].clientWidth;
    let currentIndex = 0;
    let isTransitioning = false;

    // Clonen van de eerste en laatste items voor naadloze overgang
    const firstItemClone = listItems[0].cloneNode(true);
    const lastItemClone = listItems[listItems.length - 1].cloneNode(true);

    carousel.appendChild(firstItemClone); // Eerste item aan het einde toevoegen
    carousel.insertBefore(lastItemClone, listItems[0]); // Laatste item aan het begin toevoegen
    
    // Initieel de carrousel verplaatsen om het eerste echte item te tonen
    carousel.style.transform = `translateX(-${itemWidth}px)`;
    
    /**
     * Update de positie van de carrousel.
     * Dit maakt de overgang naar de volgende/voorafgaande item.
     */
    function updateCarousel() {
        if (isTransitioning) return;
        isTransitioning = true;
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
    }

    /**
     * Reset de positie van de carrousel wanneer het einde of begin wordt bereikt,
     * om de illusie van een oneindige loop te creëren.
     */
    carousel.addEventListener('transitionend', () => {
        isTransitioning = false;
        // Als we bij het gekloonde laatste of eerste item zijn
        if (currentIndex >= listItems.length - 2) { // Gekloonde laatste item
            carousel.style.transition = 'none'; // Geen overgang voor de sprong
            currentIndex = 0; // Reset naar het echte eerste item
            carousel.style.transform = `translateX(-${itemWidth}px)`;
        } else if (currentIndex < 0) { // Gekloonde eerste item
            carousel.style.transition = 'none'; // Geen overgang voor de sprong
            currentIndex = listItems.length - 3; // Reset naar het echte laatste item
            carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
        }
    });

    /**
     * Verplaats de carrousel naar rechts bij klikken op de rechterknop.
     */
    document.getElementById('slideRight').addEventListener('click', function () {
        if (!isTransitioning) {
            currentIndex++;
            updateCarousel();
        }
    });

    /**
     * Verplaats de carrousel naar links bij klikken op de linkerknop.
     */
    document.getElementById('slideLeft').addEventListener('click', function () {
        if (!isTransitioning) {
            currentIndex--;
            updateCarousel();
        }
    });

    /**
     * Update de breedte van het item bij het aanpassen van de venstergrootte.
     */
    window.addEventListener('resize', function () {
        itemWidth = listItems[0].clientWidth;
        carousel.style.transition = 'none'; // Geen overgang tijdens het aanpassen
        carousel.style.transform = `translateX(-${(currentIndex + 1) * itemWidth}px)`;
    });

    // Hamburger menu functionaliteit
    const hamburgerMenu = document.getElementById('hamburger-menu');
    
    document.getElementById('hamburger').addEventListener('click', function(event) {
        event.preventDefault(); // Voorkom dat de pagina opnieuw laadt
        hamburgerMenu.classList.toggle('active'); // Voeg of verwijder de actieve klasse

        // Optioneel: wijzig de aria-expanded status voor toegankelijkheid
        const isActive = hamburgerMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isActive);
    });

    // Close button functionaliteit
    document.getElementById('close-button').addEventListener('click', function(event) {
        hamburgerMenu.classList.remove('active'); // Verwijder de actieve klasse om het menu te sluiten

        // Optioneel: wijzig de aria-expanded status voor toegankelijkheid
        document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
    });
});


