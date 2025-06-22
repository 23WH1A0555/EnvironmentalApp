// Example: Redeem points function
function redeemPoints() {
    let currentPoints = parseInt(document.getElementById('pointsDisplay').textContent);
    if (currentPoints >= 100) {
        currentPoints -= 100;
        alert("100 points redeemed successfully!");
        document.getElementById('pointsDisplay').textContent = currentPoints;
    } else {
        alert("Not enough points to redeem.");
    }
}

// Logout simulation
function logout() {
    alert("Logging out...");
    window.location.href = "login.html"; // Adjust to your login page
}

// Dummy compliance status loader
window.onload = function () {
    const complianceStatus = document.getElementById("complianceStatus");
    if (complianceStatus) {
        setTimeout(() => {
            complianceStatus.textContent = "Compliant ✅";
            complianceStatus.style.color = "green";
        }, 1000);
    }

    const totalWaste = document.getElementById("totalWasteDisplay");
    if (totalWaste) {
        totalWaste.textContent = "850 kg"; // Example data
    }
};
