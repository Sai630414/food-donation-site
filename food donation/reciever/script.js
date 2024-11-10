function markCollected(checkbox) {
    const card = checkbox.closest('.card');
    
    if (checkbox.checked) {
        card.style.opacity = '0.5'; // Dim the card
        card.style.pointerEvents = 'none'; // Disable interactions
    } else {
        card.style.opacity = '1'; // Restore visibility if unchecked
        card.style.pointerEvents = 'auto'; // Enable interactions
    }
}
