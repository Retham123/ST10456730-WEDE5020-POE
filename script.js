// Toggle nav menu for mobile
document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Form validation for enquiry
const enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
      document.getElementById("form-feedback").textContent =
        "All fields are required.";
      return;
    }
    document.getElementById("form-feedback").textContent =
      "Thank you! Your enquiry has been submitted.";
    enquiryForm.reset();
  });
}

// Form validation for contact
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    if (!name || !email || !message) {
      document.getElementById("contact-feedback").textContent =
        "Please fill in all fields.";
      return;
    }
    document.getElementById("contact-feedback").textContent =
      "Message sent successfully.";
    contactForm.reset();
  });
}
