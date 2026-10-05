document.getElementById("registrationForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        event: document.getElementById("event").value,
        gender: document.getElementById("gender").value
    };

    const response = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    document.getElementById("message").innerText = result.message;

    if (response.ok) {
        document.getElementById("registrationForm").reset();
    }
});