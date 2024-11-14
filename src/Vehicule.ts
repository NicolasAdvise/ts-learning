function calculateRentalCost(duration: number, cost: number): number {
    return duration * cost;
}

for (let i = 1; i <= 8; i++) {
    let duration: number = Math.floor(Math.random() * 20) + 1;
    let cost: number = Math.floor(Math.random() * 100) + 1;
    let total = calculateRentalCost(duration, cost);

    console.log(
        `Pour une location de ${duration} jours au prix journalier de ${cost}€, le prix total s'élève à ${total}€`
    );
}
