// ================= EMAILJS INIT =================
emailjs.init("service_5i21ybi");

// ================= REQUEST FORM =================
document.getElementById("requestForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_5i21ybi", "template_h1a3qs8", {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
        to_email: "generalmaximus106@gmail.com"
    })
    .then(() => {
        alert("Request sent successfully!");
        this.reset();
    })
    .catch((error) => {
        alert("Failed to send request.");
        console.log(error);
    });
});

// ================= SERVICE TAB UI =================
const tabs = document.querySelectorAll(".service-tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

    });
});

// ================= SERVICE AUTO FILL =================

const serviceTextMap = {
    "Web Development": "Web Development: Continue describing your website idea...",
    "AI Systems": "AI Systems: Describe the AI solution you want built...",
    "Cloud Solutions": "Cloud Solutions: Explain your cloud infrastructure needs..."
};

const tabs = document.querySelectorAll(".service-tab");
const textarea = document.getElementById("serviceRequest");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const service = tab.textContent.trim();

        // Highlight active tab
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Inject text into textarea
        if (serviceTextMap[service]) {

            textarea.value = serviceTextMap[service];

            // Move cursor to end so user continues typing naturally
            textarea.focus();
            textarea.setSelectionRange(textarea.value.length, textarea.value.length);

        }

    });

});