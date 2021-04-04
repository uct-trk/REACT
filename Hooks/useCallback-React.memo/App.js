import React, {useCallback, useState} from 'react'
import './style.css'

const phones = [
  {name: 'İphone 8', price: 10000},
  {name: 'Samsung Edge', price: 6500},
  {name: 'Huawei p20', price: 8000},
]

const App = () => {
  const [products] = useState(phones)
  const [cart, setCart] = useState([])

  const addToCart = useCallback((product) => {
    setCart((cart) => [...cart, product]) // mevcutt sepetin üzerine parametre olarak alınan productu ekler
  }, []) // arrayın boş kalmasının sebebi addto cartı değiştirmemize gerek yok

  const emptyCart = useCallback(() => {
    setCart([])
  }, [])

  return (
    <div className="wrapper">
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  )
}

const Products = React.memo(({products, addToCart}) => {
  return (
    <React.Fragment>
      <h1>Ürünler</h1>
      <div className="products">
        {products.map(({name, price}) => (
          <Product key={name} name={name} price={price} addToCart={addToCart} />
        ))}
      </div>
    </React.Fragment>
  )
})

const Cart = ({cart, emptyCart}) => {
  return (
    <React.Fragment>
      <h1>
        Sepetiniz <button onClick={emptyCart}>Sepeti Boşalt</button>
      </h1>
      <div className="products">
        {cart.map(({name, price}, index) => (
          <Product key={index} name={name} price={price} />
        ))}
      </div>
    </React.Fragment>
  )
}

const Product = React.memo(({name, price, addToCart}) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <h3>{price.toLocaleString()} TL</h3>
      {addToCart && (
        <button onClick={() => addToCart({name, price})}>Sepete Ekle</button>
      )}
    </div>
  )
})

export default App
