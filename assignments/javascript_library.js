var _ = {
    map: function(arr, callback) {
        //code here;
        for (let i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
    },
    reduce: function(arr, callback, memo) {
        // code here;
        let element = 0;
        if (!memo) {
            memo = arr[0];
            el = 1;
        }
        for (let i = el; i < arr.length; i++) {
            memo = callback(arr[i], memo);
        }
        return memo;
    },
    find: function(arr, callback) {
        // code here;
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
    },
    filter: function(arr, callback) {
        // code here;
        const temporaryArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                temporaryArr.push(arr[i]);
            }
        }
        return temporaryArr;
    },
    reject: function(arr, callback) {
        // code here;
        const temporaryArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                temporaryArr.push(arr[i]);
            }
        }
        return temporaryArr;
    }
};

// you just created a library with 5 methods!
const evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });

console.log(evens); // if things are working right, this will return [2,4,6].
