function convertToSubcurrency(amount: number, exchangeRate: number = 100) {
    return Math.round(amount * exchangeRate);
}

export default convertToSubcurrency;