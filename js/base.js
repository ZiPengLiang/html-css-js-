// 随机颜色
function randomColor() {
    // console.log(Math.random())
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    return `rgb(${c1},${c2},${c3})`
}
// 随机整数数  range--范围  start--开始  [start,range]
function randomNumber(Range, start) {
    return Math.floor(Math.random() * (range + 1) + start)
}