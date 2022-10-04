import { createContext, useState } from "react";

const cartHookCtxt = createContext();

function CartContextProvider (props)
{
    const [productsBought, setProductsBought] = useState( 0 );
    const [cart, setCart] = useState( [] );

    function addProductToCart( product, desiredAmount )
    {
        //si es el primer producto...
        if(cart.length===0)
        {
            //creo la propiedad desiredAmount en el objeto product
            product.desiredAmount = desiredAmount;
            //y subo el objeto al array cart
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
                //crea una copia del cart
                const auxArray = cart.concat();
                //en esa copia, sumá la cantidad de productos que ya querían con la que acaban de agregar
                auxArray[position].desiredAmount += desiredAmount;
                //y actualiza el carrito
                setCart(auxArray);
            }

            //si este específico producto no existía en el carrito
            else
            {
                //creo la propiedad desiredAmount en el objeto product
                product.desiredAmount = desiredAmount;
                //crea una copia del cart
                const auxArray = cart.concat();
                //pushea el producto en la copia
                auxArray.push(product)
                //y actualiza el carrito
                setCart(auxArray);
            }
        }
        
        //por último, actualiza el contador de productos comprados
        const quantity = productsBought + desiredAmount;
        setProductsBought(quantity);
    }

    function clearProductFromCart(id)
    {
        /*conseguí la index-position del elemento cuya propiedad ID 
        sea igual a la del producto que desea eliminarse */
        const position = cart.map( element => element.id ).indexOf(id);
        //crea una copia del cart
        const auxArray = cart.concat();
        //en esa copia, eliminá al producto
        auxArray.splice( position, 1 );
        //actualiza el contador de productos comprados
        const quantity = productsBought - cart[position].desiredAmount;
        setProductsBought(quantity);
        //y actualiza el carrito
        setCart(auxArray);
    }

    function clearCart(){
        setCart( [] );
        setProductsBought(0);
    }
    
    return(
        <cartHookCtxt.Provider value={{
            addProductToCart,
            clearProductFromCart,
            clearCart,
            productsBought,
            cart}}>

            {props.children}
            
        </cartHookCtxt.Provider>
    )
}

export {cartHookCtxt, CartContextProvider}