const plus = (data) => {
    return data.reduce((pre, cur) => {
        return pre + cur
    })
}
const minus = (data) => {
    return data.reduce((pre, cur) => {
        return pre - cur
    })
}
const multy = (data) => {
    return data.reduce((pre, cur) => {
        return pre * cur
    })
}
const devision = (data) => {
    return data.reduce((pre, cur) => {
        return pre / cur
    })
}
const square = (data) => {
    return data.reduce((pre, cur) => {
        return pre ** cur
    })
}
const moders = (data) => {
    return data.reduce((pre, cur) => {
        return pre % cur
    })
}
const percent = (data) => {
    return data.reduce((pre, cur) => {
        return pre * cur / 100
    })
}
const root = (data) => {
    return Math.sqrt(data)
}
const round_off = (data) => {
    return Math.round(data)
}
const round_up = (data) => {
    return Math.ceil(data)
}
const round_down = (data) => {
    return Math.floor(data)
}

const calc = (event) => {
    const type = event.target.value
    const elements = []
    const data = []
    let resultElement
    let result
    
    for (let i of event.target.parentElement.children) {
        i.type === 'number' && elements.push(i) && data.push(Number(i.value))  
        i.type === 'text' && (resultElement = i) 
        // if (i.value === 'clear') {
        //     result = ''    
        // }
    }

    type === 'PLUS' && (result = plus(data)) // i.value 에 적힌 값으로 계산
    type === 'MINUS' && (result = minus(data))
    type === 'MULTY' && (result = multy(data))
    type === 'DEVISION' && (result = devision(data))
    type === 'SQUARE' && (result = square(data))
    type === 'MODERS' && (result = moders(data))
    type === 'PERCENT' && (result = percent(data))
    type === 'ROOT' && (result = root(data))
    type === 'ROUND_OFF' && (result = round_off(data))
    type === 'ROUND_UP' && (result = round_up(data))
    type === 'ROUND_DOWN' && (result = round_down(data))

    resultElement.value = result  
}

const clearInput = (event) => {
    for (let i of event.target.parentElement.children) {
        if (i.type === 'number' || i.type === 'text') {
            i.value = ''
        }
    }
}