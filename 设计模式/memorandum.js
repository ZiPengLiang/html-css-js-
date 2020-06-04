// 备忘录模式
// 备忘录模式：属于行为模式，保存某个状态，并且在需要的时候直接获取，而不是重复计算。
const fetchData = (() => {
    //缓存
    const cache = {}

    return page => {
        new Promise(resolve => {
            console.log(cache, page)
                //如果已经有数据就直接取出来
            if (page in cache) {
                return resolve(cache[page])
            }
            //否者就异步请求页面数据
            //模拟异步请求
            setTimeout(() => {
                console.log(page)
                cache[page] = `内容是${page}`
                resolve(cache[page])
            }, 1000)
        })
    }
})()


//测试代码是否生效

const run = async() => {
    let start = new Date().getTime(),
        now;
    console.log(111)
        //第一次没有缓存
    let returnData = await fetchData(1);
    console.log(112)
    now = new Date().getTime()
    console.log(`没有缓存，耗时${now - start},数据：${returnData}`)

    start = now
    returnData = await fetchData(1)
    now = new Date().getTime()
    console.log(`有缓存，耗时${now - start},数据：${returnData}`)
}
run()