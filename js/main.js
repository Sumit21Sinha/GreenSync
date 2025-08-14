document.addEventListener('DOMContentLoaded', () => {
    const isUserLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
    const currentPage = window.location.pathname.split('/').pop();

    if (!isUserLoggedIn && currentPage !== 'login.html') {
        window.location.href = 'login.html';
        return;
    }

    // Common elements to inject
    const headerHTML = `
        <div class="header-container">
            <a href="my-plants.html"><img src="assets/logo.jpg" alt="GreenSync Logo" class="logo"></a>
            <div>
                <h1>GreenSync</h1>
                <h3>Smart Self-Watering Plant System</h3>
            </div>
        </div>`;
    
    const navHTML = `
        <a href="my-plants.html" class="nav-link ${currentPage.includes('my-plants') || currentPage.includes('pot-detail') ? 'active' : ''}">Dashboard</a>
        <a href="about.html" class="nav-link ${currentPage.includes('about') ? 'active' : ''}">About Us</a>
        <a href="contact.html" class="nav-link ${currentPage.includes('contact') ? 'active' : ''}">Contact Us</a>
        <a href="#" class="nav-link" id="logout-link">Logout</a>`;

    const footerHTML = `<p>&copy; 2025 GreenSync. All rights reserved.</p>`;

    // Inject common elements into the page
    document.querySelector('header').innerHTML = headerHTML;
    document.querySelector('.navbar').innerHTML = navHTML;
    document.querySelector('footer').innerHTML = footerHTML;

    // Logout functionality
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.clear();
            window.location.href = 'login.html';
        });
    }
});