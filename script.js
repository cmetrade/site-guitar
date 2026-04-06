function mostrarMensagem() {
    alert("Prepare-se para aumentar o volume! 🎸");
}

function highlightCard(element) {
    // Remove destaque de todos os outros cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => {
        c.style.boxShadow = "none";
        c.style.backgroundColor = "#1a1a1a";
    });

    // Adiciona destaque ao card clicado
    element.style.boxShadow = "0 0 20px rgba(0, 123, 255, 0.5)";
    element.style.backgroundColor = "#222";
    
    console.log("Selecionado: " + element.querySelector('h3').innerText);
}
