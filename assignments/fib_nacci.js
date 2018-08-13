function fib() {
    // Some variables here
    let num = 0;

    function nacci(num) {
        num++;
        if (num <= 1) {
            return 1;
        }
        // do something to those variables here
        return (num - 1) + (num - 2);
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
