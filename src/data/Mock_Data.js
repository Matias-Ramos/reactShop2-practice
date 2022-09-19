const stock = 
[{"id":1,"product_name":"Higo","price":90.8,"organic":true,"stock":10},
{"id":2,"product_name":"Tomate","price":42.9,"organic":false,"stock":15},
{"id":3,"product_name":"Mango","price":69.9,"organic":false,"stock":2},
{"id":4,"product_name":"Lechuga","price":71.4,"organic":false,"stock":32},
{"id":5,"product_name":"Jengibre","price":93.8,"organic":false,"stock":34},
{"id":6,"product_name":"Papa","price":5.1,"organic":false,"stock":24},
{"id":7,"product_name":"Manzana","price":21.9,"organic":true,"stock":17},
{"id":8,"product_name":"Banana","price":19.1,"organic":true,"stock":2},
{"id":9,"product_name":"Palta","price":29.3,"organic":false,"stock":8},
{"id":10,"product_name":"Cebolla","price":72.2,"organic":false,"stock":2}]

export default function getStock () 
{
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve (stock);
        },1200);
    } );
}
