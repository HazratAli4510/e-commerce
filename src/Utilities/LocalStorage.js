const getLocalCart = () => {
    const cart = localStorage.getItem('cart')
    let obj;
    if (cart) {
        obj = JSON.parse(cart)
    } else {
        obj = {}
    }
    return obj
}

const addToLocal = key => {
    const existingCart = getLocalCart()
    if (!existingCart[key]) {
        existingCart[key] = 1
    } else {
        existingCart[key] = existingCart[key] +1
    }
    localStorage.setItem('cart' , JSON.stringify(existingCart))
}



export {getLocalCart , addToLocal}