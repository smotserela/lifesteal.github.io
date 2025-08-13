// Voorbeeld: Dynamische tierlist (later uitbreiden met echte data)
document.addEventListener("DOMContentLoaded", () => {
    console.log("McTiers is geladen!");

    // Voorbeeld: Voeg een item toe via admin (simpele versie)
    const adminPassword = "mctiers123"; // Verander dit!
    const password = prompt("Admin wachtwoord:");

    if (password === adminPassword) {
        alert("Je bent ingelogd als admin! Gebruik de console om items toe te voegen.");
        window.addItemToTier = (tierId, itemName, itemImg) => {
            const tier = document.querySelector(`.${tierId} .items`);
            tier.innerHTML += `
                <div class="item">
                    <img src="${itemImg}" alt="${itemName}">
                    <span>${itemName}</span>
                </div>
            `;
        };
    }
});
