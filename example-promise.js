// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('city not found');
// }

// getTempCallback('Hola', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('hola').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// })

//Challenge area


function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        }else {
            reject(`${a} or ${b} aren't a number`);
        }
    });
}

addPromise(4, 5)
    .then(function (result) {
        console.log('the result is', result);
    })
    .catch(function (err) {
        console.log('The promise has an error', err);
    });