async function async1() {
    console.log('2')
    await async2()
    console.log('7')
}

async function async2() {
    console.log('3')
}

setTimeout(function() {
    console.log('8')
}, 0)

console.log('1')
async1()

new Promise(function(resolve) {
    console.log('4')
    resolve()
}).then(function() {
    console.log('6')
})
console.log('5')