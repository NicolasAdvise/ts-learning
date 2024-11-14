function calculateRentalCost(duration: unknown, cost: unknown): number | string {
    if (typeof duration !== 'number' || typeof cost !== 'number') {
        return "Erreur : Les paramètres doivent être de type nombre.";
    }
    return duration * cost;
}

for (let i = 1; i <= 8; i++) {
    let duration: any;
    let cost: any;

    if (i === 3) {
        duration = "something went wrong";
        cost = Math.floor(Math.random() * 100) + 1;
    } else if (i === 5) {
        duration = Math.floor(Math.random() * 20) + 1;
        cost = "something went wrong";
    } else {
        duration = Math.floor(Math.random() * 20) + 1;
        cost = Math.floor(Math.random() * 100) + 1;
    }

    let total = calculateRentalCost(duration, cost);

    console.log(
        typeof total === "number"
            ? `Pour une location de ${duration} jours au prix journalier de ${cost}€, le prix total s'élève à ${total}€`
            : total
    )
}
