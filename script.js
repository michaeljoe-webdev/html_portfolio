// Add 'animated' class to sections when they come into view
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight) {
                section.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections();
});
let servicesWrapper = document.querySelector('.services-wrapper');
        let services = document.querySelectorAll('.service');
        let currentIndex = 0;

        function showService(index) {
            if (index < 0) {
                index = services.length - 1;
            } else if (index >= services.length) {
                index = 0;
            }
            currentIndex = index;
            let offset = -currentIndex * 100;
            servicesWrapper.style.transform = `translateX(${offset}%)`;
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.services').addEventListener('swiped-left', () => showService(currentIndex + 1));
            document.querySelector('.services').addEventListener('swiped-right', () => showService(currentIndex - 1));
        });

        // Swipe detection logic (from https://stackoverflow.com/a/23230280)
        let touchstartX = 0;
        let touchendX = 0;

        function handleGesture() {
            if (touchendX < touchstartX) {
                showService(currentIndex + 1);
            }
            if (touchendX > touchstartX) {
                showService(currentIndex - 1);
            }
        }

        document.querySelector('.services').addEventListener('touchstart', (event) => {
            touchstartX = event.changedTouches[0].screenX;
        }, false);

        document.querySelector('.services').addEventListener('touchend', (event) => {
            touchendX = event.changedTouches[0].screenX;
            handleGesture();
        }, false);