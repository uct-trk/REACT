import React from 'react'

const Product = ({product, cart, setCart, total, money}) => {

  const cartItem = cart.find(item => item.id === product.id)

  const addCart = () => {
    // 1. Önce sepette ürün var mı yokmu bakmamız gerekiyor
    const checkCart = cart.find(item => item.id === product.id)
    // ürün daha önce eklenmiş
    if(checkCart){
      checkCart.amount += 1
      setCart([...cart.filter(item => item.id !== product.id), checkCart])
    } else {
      setCart([...cart, {
        id: product.id,
        amount: 1,
        title: product.title
      }])
    }
  }

  const removeCart = () => {
     
    const currentCart = cart.find(item => item.id === product.id)
    const cartWithoutCurrent = cart.filter(item => item.id !== product.id)
    currentCart.amount -= 1
    if(currentCart.amount === 0){
    setCart([...cartWithoutCurrent])
    }else{
      setCart([...cartWithoutCurrent, currentCart])
    }
        
  }

  return(
    <>
      <div>
        <h6>{product.title}</h6>
        <div>$ {product.price}</div>
        <button disabled={!cartItem} onClick={removeCart}>Remove</button>
        <span>{cartItem && cartItem.amount || 0}</span>
        <button disabled={total + product.price > money} onClick={addCart}>Add</button>
      </div>
    </>
  )
}
export default Product

// disabled={total + product.price > money} belirli paradan sonra disabled yapıyor ve satın al butonu çalışmıyor