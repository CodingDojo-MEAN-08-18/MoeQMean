module.exports = function (){
    return {
        add: function(num1, num2) {
            // add code here
            let sum = num1 + num2;
            console.log(sum);
        },
        multiply: function(num1, num2) {
            // add code here
            let result = num1 * num2;
            console.log(result);
        },
        square: function(num) {
            // add code here
            let result = num * num;
            console.log(result);
        },
        random: function(num1, num2) {
            // add code here
            let result = Math.floor(Math.random() * num2) + num1;
            console.log(result);
        }
    }
};