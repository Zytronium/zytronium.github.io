document.addEventListener("DOMContentLoaded", () => {
    const main_container = document.getElementById("main-container");
    const overlay = document.getElementById('zoomOverlay');

    document.querySelectorAll('.project-card img').forEach(img => {
        img.addEventListener('click', () => {
            const isZoomed = img.classList.toggle('zoomed');

            if (isZoomed) {
                overlay.classList.add('visible');
                document.body.style.overflow = 'hidden';
                main_container.classList.add('unblur'); // Its backdrop filter breaks zoomed images' positioning
            } else {
                overlay.classList.remove('visible');
                document.body.style.overflow = '';
                main_container.classList.remove('unblur');
            }

            // Allow clicking the overlay to unzoom
            overlay.onclick = () => {
                img.classList.remove('zoomed');
                overlay.classList.remove('visible');
                document.body.style.overflow = '';
                main_container.classList.remove('unblur');
            };
        });
    });
});