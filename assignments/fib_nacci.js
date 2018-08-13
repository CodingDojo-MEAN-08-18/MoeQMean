function fib() {
    // Some variables here
    let previousNum = 0;
    let currentNum = 1;

    function nacci(num) {
        const temporary = previousNum;
        console.log(currentNum);

        previousNum = currentNum;
        currentNum = currentNum + temporary;
    }
    return nacci
}
const fibCounter = fib();
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
