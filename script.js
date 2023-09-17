document.addEventListener('DOMContentLoaded', function() {
    // Get all links with class "scroll-link"
    const scrollLinks = document.querySelectorAll('.scroll-link');

    // Add a click event listener to each link
    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default behavior of the link

            const targetId = this.getAttribute('href').substring(1); // Get the target section's id
            const targetSection = document.getElementById(targetId); // Get the target section

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
