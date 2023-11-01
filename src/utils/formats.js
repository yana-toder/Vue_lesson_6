export function getFormattedNumber(number) {
    return number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
}
