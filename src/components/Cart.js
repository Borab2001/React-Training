import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
    const lierrePrice = 10
    const bouquetPrice = 15
    return (<div className='lmj-cart'>
       <h2>Panier</h2>
       <ul>
         <li>Monstera : {monsteraPrice}€</li>
         <li>Lierre : {lierrePrice}€</li>
         <li>Bouquet : {bouquetPrice}€</li>
       </ul>
       Total : {monsteraPrice + lierrePrice + bouquetPrice}€
    </div>)
}

export default Cart