// =========================================
// GUIDE ÉLECTRO — JAVASCRIPT V1
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Guide Électro est chargé.");

    // Animation simple de la progression
    const progressValue = document.querySelector(".progress-value");

    if (progressValue) {
        setTimeout(() => {
            progressValue.style.width = "0%";
        }, 300);
    }

    // Gestion des liens internes
    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });

});
