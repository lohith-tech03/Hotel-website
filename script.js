// Booking Form Validation

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event){

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let room = document.getElementById("room").value;

        if(name === "" || email === "" || room === ""){

            alert("Please fill all required fields.");
            event.preventDefault();

        } else {

            alert("Booking Submitted Successfully!");

        }
    });

}


// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll("#nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}