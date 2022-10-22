import { createContext, useState} from "react";

const cartHookCtxt = createContext();

function CartContextProvider (props)
{
    const [cart, setCart] = useState( [] );
    
    function addProductToCart( product, desiredAmount )
    {
        
        if(cart.length===0) //if this is the first product
        {
            product.desiredAmount = desiredAmount; //create desiredAmount property in the product obj
            setCart( [product] );
        }
        else
        {
            if( cart.some( item => item.id === product.id ) ) //if this specific product already existed in the cart
            {
                const position = cart.map( element => element.id ).indexOf(product.id) /*get the index-position of the element with same ID as the product that is being re-purchased.*/                
                const auxArray = [...cart];
                auxArray[position].desiredAmount += desiredAmount; //in the cart copy, sum the qty of products already there with the amount that the user have just added.
                setCart(auxArray); 
            }
            else
            {
                product.desiredAmount = desiredAmount; //create desiredAmount property in the product obj
                const auxArray = [...cart];
                auxArray.push(product)
                setCart(auxArray);
            }
        }
    }

    function clearProductFromCart(id)
    {
        const position = cart.map( element => element.id ).indexOf(id); /*get the index-position of the element with same ID as the product that is to be deleted.*/
        const auxArray = [...cart];
        auxArray.splice( position, 1 );
        setCart(auxArray);
    }

    function clearCart(){
        setCart( [] );
    }
    
    function reduceProductAmountByOne(id)
    {
        const position = cart.map( element => element.id ).indexOf(id); /*get the index-position of the element with same ID as the product that is to be reduced.*/
        const auxArray = [...cart];
        auxArray[position].desiredAmount -= 1
        setCart(auxArray);
    }
    
    function calculateTotalExpense(userCart)
    {
        let expenseSum = userCart.reduce ( (accumulator, purchase) => 
        accumulator + (purchase.price * purchase.desiredAmount), 0 )
        return ( expenseSum.toFixed(2) );
    }

    function calculateQtyOfBoughtProducts()
    {
        let productQty = cart.reduce ( (accumulator, purchase) => 
        accumulator + purchase.desiredAmount, 0 );
        return productQty;
    }

	// {
    //     //update totalExpense state
    //     let expenseSum = cart.reduce ( (accumulator, purchase) => 
    //     accumulator + (purchase.price * purchase.desiredAmount), 0 )
    //     setTotalExpense(expenseSum.toFixed(2));

    //     //update qtyOfBoughtProducts state 
    //     let productQty = cart.reduce ( (accumulator, purchase) => 
    //     accumulator + purchase.desiredAmount, 0 );
    //     setqtyOfBoughtProducts(productQty);
    // }, 
    // [cart] );

    return(
        <cartHookCtxt.Provider value={{
            addProductToCart,
            clearProductFromCart,
            clearCart,
            reduceProductAmountByOne,
            calculateTotalExpense,
            calculateQtyOfBoughtProducts,
            cart}}>

            {props.children}
            
        </cartHookCtxt.Provider>
    )
}

export {cartHookCtxt, CartContextProvider}


