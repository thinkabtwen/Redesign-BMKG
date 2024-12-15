

// For Active Link/Page
window.onload = function() {
    const currentPage = window.location.pathname;

    if (currentPage.includes('project.html') || currentPage === '/') {
        document.getElementById('home-link').classList.add('active-link');
    } else if (currentPage.includes('weather-forecast.html')) {
        document.getElementById('weather-link').classList.add('active-link');
    } else if (currentPage.includes('contact-us.html')) {
        document.getElementById('contact-link').classList.add('active-link');
    }
};

// For Dropdown Menu
document.getElementById('dropdown-icon').onclick = function() {
    const menu = document.getElementById('menu-right');
    menu.classList.toggle('show'); 
};

function updateLocation() {
    const locationSelect = document.getElementById("location");
    const selectedLocation = locationSelect.options[locationSelect.selectedIndex].text;
    document.getElementById("selected-location").innerText = selectedLocation;
}

function updateDays() {
    const daysSelect = document.getElementById("days");
    const selecteddays = daysSelect.options[daysSelect.selectedIndex].text;
    document.getElementById("selected-days").innerText = selecteddays;
}
