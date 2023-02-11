
const PairNumber = (numbers) => {
    let array = []
    numbers.forEach(number => {
        if (number % 2 === 0) {
            array.push(number)
        }
    })
    return array
}

console.log(PairNumber ([1, 2, 3, 4, 5]))