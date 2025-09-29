// (0,1) adds the last two numbers to the current sum

const fib = (i = 0,a = 0,b = 1) => {

    if (i < 0) return console.error("Cannot take negative numbers");
    if (typeof(i) !== "number") return console.error("Input must be a number")
    if (i === 0) return []
    if (i === 1) return [a]
    return [a,...fib(i-1,b,a+b)]

}

console.log(fib(8))