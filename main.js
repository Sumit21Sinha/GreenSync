
window.addEventListener('DOMContentLoaded', () => {
    const tempData = [22, 23, 24, 23, 24, 25];
    const moistureData = [45, 47, 48, 46, 47, 49];
    const humidityData = [53, 54, 55, 54, 55, 56];

    if (window.Chart) {
        const ctx = document.getElementById('sensorChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["12:00", "12:05", "12:10", "12:15", "12:20", "12:25"],
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: tempData,
                        borderColor: '#43ea7f',
                        backgroundColor: 'rgba(67,234,127,0.16)',
                        tension: 0.35
                    },
                    {
                        label: 'Soil Moisture (%)',
                        data: moistureData,
                        borderColor: '#2e7d32',
                        backgroundColor: 'rgba(46,125,50,0.14)',
                        tension: 0.35
                    },
                    {
                        label: 'Humidity (%)',
                        data: humidityData,
                        borderColor: '#8bc34a',
                        backgroundColor: 'rgba(139,195,74,0.13)',
                        tension: 0.35
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        labels: {
                            color: "#213b2e",
                            font: { size: 14 }
                        }
                    }
                },
                scales: {
                    x: { ticks: { color: "#2e7d32" } },
                    y: { beginAtZero: true, ticks: { color: "#2e7d32" } }
                }
            }
        });
    }


    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.animation = `fadeUp 0.9s forwards ${i * 0.25 + 0.3}s`;
    });

    const contactSection = document.querySelector('.contact-section');
    contactSection.style.opacity = '0';
    contactSection.style.animation = "fadeUp 1.1s forwards 1.1s";
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about-section');
    const aboutLink = document.getElementById('about-link');
    const dashboardSection = document.getElementById('dashboard-section');
    const chartSection = document.getElementById('chart-section');
    const contactSection = document.getElementById('contact-section');
    const dashboardLink = document.getElementById('dashboard-link');
    const contactLink = document.getElementById('contact-link');

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        dashboardSection.style.display = 'none';
        chartSection.style.display = 'none';
        contactSection.style.display = 'none';

        aboutSection.style.display = 'block';
        aboutSection.style.opacity = 0;
        setTimeout(() => {
            aboutSection.style.opacity = 1;
            aboutSection.style.transition = 'opacity 0.6s';
        }, 50);
    });

    dashboardLink.addEventListener('click', function(e){
        e.preventDefault();
        aboutSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        chartSection.style.display = 'block';
        contactSection.style.display = 'block';
        window.scrollTo({ top: dashboardSection.offsetTop - 20, behavior: 'smooth' });
    });

    contactLink.addEventListener('click', function(e){
        e.preventDefault();
        aboutSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        chartSection.style.display = 'block';
        contactSection.style.display = 'block';
        window.scrollTo({ top: contactSection.offsetTop - 20, behavior: 'smooth' });
    });

    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you for reaching out! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});
