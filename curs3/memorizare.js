function sample(...args) {
    console.log(args)
    //serializare a lui args la string
    console.log(JSON.stringify(args))
    return args.reduce((a,e) => a+e, 0)
}

function memorize(f) {
    const cache = {}
    return function (...args) {
        const key = JSON.stringify(args)
        if(key in cache) {
            console.log('CACHES' + key)
            return cache[key]
        } else {
            const result = f(...args)
            cache[key] = result
            return result
        }
    }
}

console.log(sample(1,2,3))
