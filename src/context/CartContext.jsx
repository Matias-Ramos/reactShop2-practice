import { createContext, useState, useEffect} from "react";

const cartHookCtxt = createContext();

function CartContextProvider (props)
{
    const [cart, setCart] = useState( [] );
    const [qtyOfBoughtProducts, setqtyOfBoughtProducts] = useState( 0 );
    const [totalExpense, setTotalExpense] = useState( 0 );
    
    function addProductToCart( product, desiredAmount )
    {
        //si es el primer producto...
        if(cart.length===0)
        {
            //creá la propiedad desiredAmount en el objeto product
            product.desiredAmount = desiredAmount;
            //y subí el objeto al array cart
            setCart( [product] );
        }
        
        //si ya existían productos en el carrito
        else
        {
            //si este específico producto ya existe en el carrito
            if( cart.some( item => item.id === product.id ) )
            {
                /*conseguí la index-position del elemento cuya propiedad ID 
                sea igual a la del producto que desea ser actualizar*/
                const position = cart.map( element => element.id ).indexOf(product.id)
                //creá una copia del cart
                const auxArray = cart.concat();
                //en esa copia, sumá la cantidad de productos que ya querían con la que acaban de agregar
                auxArray[position].desiredAmount += desiredAmount;
                //y actualizá el carrito
                setCart(auxArray);
            }

            //si este específico producto no existía en el carrito
            else
            {
                //creá la propiedad desiredAmount en el objeto product
                product.desiredAmount = desiredAmount;
                //creá una copia del cart
                const auxArray = cart.concat();
                //pusheá el producto en la copia
                auxArray.push(product)
                //y actualizá el carrito
                setCart(auxArray);
            }
        }
    }

    function clearProductFromCart(id)
    {
        /*conseguí la index-position del elemento cuya propiedad ID 
        sea igual a la del producto que desea eliminarse */
        const position = cart.map( element => element.id ).indexOf(id);
        //creá una copia del cart
        const auxArray = cart.concat();
        //en esa copia, eliminá al producto
        auxArray.splice( position, 1 );
        //actualizá el carrito
        setCart(auxArray);
    }

    function clearCart(){
        setCart( [] );
    }
    
    function productAmountUpdate(id) //...from cartContainer.
    {
        /*conseguí la index-position del elemento cuya propiedad ID 
        sea igual a la del producto que desea eliminarse */
        const position = cart.map( element => element.id ).indexOf(id);
        //creá una copia del cart
        const auxArray = cart.concat();
        //en esa copia, modificá la variable desiredAmount en 1.
        auxArray[position].desiredAmount -= 1
        //actualizá el carrito
        setCart(auxArray);
    }
    
    useEffect( () => //cada vez que muta el estado cart.
	{
        //actualiza el estado totalExpense
        let expenseSum = cart.reduce ( (accumulator, purchase) => 
        accumulator + (purchase.price * purchase.desiredAmount), 0 ) //por cada compra ->  (acumulador + (precio * cantidad de productos comprados).
        setTotalExpense(expenseSum.toFixed(2));

        //actualiza el estado qtyOfBoughtProducts
        let productQty = cart.reduce ( (accumulator, purchase) => 
        accumulator + purchase.desiredAmount, 0 );
        setqtyOfBoughtProducts(productQty);
    }, 
    [cart] );

    return(
        <cartHookCtxt.Provider value={{
            addProductToCart,
            clearProductFromCart,
            clearCart,
            productAmountUpdate,
            totalExpense,
            qtyOfBoughtProducts,
            cart}}>

            {props.children}
            
        </cartHookCtxt.Provider>
    )
}

export {cartHookCtxt, CartContextProvider}


