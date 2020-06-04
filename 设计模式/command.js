//命令模式
// 命令模式定义：将一个请求封装为一个对象，从而使我们可用不同的请求对客户进行参数化；对请求排队或者记录请求日志，以及支持可撤销的操作。


const mockData = {
    10001: {
        name: '电视机',
        price: 3888
    },
    10002: {
        name: 'MackBook',
        price: 17000
    }
}

//执行者
class Mall {
    static request(id) {
        if (!mockData[id]) {
            return '商品不存在'
        }

        const { name, price } = mockData[id]

        return `商品名:${name} 单价:${price}`
    }
    static buy(id, number) {
        if (!mockData[id]) {
            return '商品不存在'
        }
        if (number < 1) {
            return '至少购买一件商品'
        }

        return mockData[id].price * number
    }
}
//传递者

function execCmd(cmd, ...args) {
    if (typeof Mall[cmd] !== 'function') {
        return
    }

    console.log(` At ${Date.now()},call ${cmd}`)
    return Mall[cmd](...args)
}

//调用者
console.log(execCmd('request', 10001))
console.log('10个mbp的总价是', execCmd('buy', 10002, 10))