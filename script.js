        
document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        const navLinkItems = document.querySelectorAll('.nav-links a');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close the navigation when a link is clicked
        navLinkItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });


        const projectCards = document.querySelectorAll('.project-card');
        const buttons = document.querySelectorAll('.filter-btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');

                // update active class
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // filter projects
                projectCards.forEach(card => {
                    const projectCategory = card.getAttribute('data-category');
                    if (category === 'all' || projectCategory === category) {
                        card.classList.remove('hide');

                    } else {
                        card.classList.add('hide');

                    }
                });
            })
        }
        );
        const lightbox = document.getElementById("lightbox-modal");
        const lightboxImg = document.getElementById("lightbox-img");
        const closeBtn = document.querySelector(".lightbox .close");

        document.querySelectorAll(".project-image").forEach(img => {
            img.addEventListener("click", function () {
                lightbox.style.display = "flex";

                lightboxImg.src = img.dataset.large || img.src;
                lightboxImg.alt = img.alt;
            });
        });
        closeBtn.addEventListener("click", function () {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });

        document.getElementById("contact-form").addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const feedback = document.getElementById("form-feedback");

            if (!name || !email || !message) {
                feedback.textContent = "Please fill in all fields.";
                feedback.className = "error";
                feedback.classList.remove("hidden");
                return;
            }
            feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
            feedback.className = "success";
            feedback.classList.remove("hidden");

            this.reset();

            setTimeout(() => {
                feedback.classList.add("hidden");
            }, 5000);
        });


    });



    