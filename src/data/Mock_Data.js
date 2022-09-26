const stock = 
[
    {"id":0,"product_name":"Higo","price":90.8,"organic":true,"description":"Una fruta blanda y de piel fina cuyo color varía de verde a morado mientras que la pulpa puede ser encarnada o blanca.","stock":10,"isFruit":true},
    
    {"id":1,"product_name":"Tomate","price":42.9,"organic":false,"description":"Aunque botánicamente el tomate es una fruta, a efectos culinarios se le considera una hortaliza.","stock":15,"isFruit":true},
    
    {"id":2,"product_name":"Mango","price":69.9,"organic":false,"description":"Es una fruta normalmente de color verde en un principio, y amarillo, naranja e incluso rojo-granate cuando está madura, de sabor medianamente ácido cuando no ha madurado completamente","stock":2,"isFruit":true},
    
    {"id":3,"product_name":"Lechuga","price":71.4,"organic":false,"description":"La lechuga es una hortaliza formada por grandes hojas","stock":32,"isFruit":false},
    
    {"id":4,"product_name":"Jengibre","price":93.8,"organic":false,"description":"Hierba con tallos subterráneos (rizomas) horizontales, muy aromáticos de sabor picante y color blanco en su interior.","stock":34,"isFruit":false},
    
    {"id":5,"product_name":"Papa","price":5.1,"organic":false,"description":"Obispo de Roma y máxima autoridad de la iglesia católica.","stock":24,"isFruit":false},
    
    {"id":6,"product_name":"Manzana","price":21.9,"organic":true,"description":"Es una fruta pomácea de forma redonda y sabor muy dulce","stock":17,"isFruit":true},

    {"id":7,"product_name":"Banana","price":19.1,"organic":true,"description":"La banana también aporta vitaminas A, C, B1, B2, B6, B9 -ácido fólico- y E.","stock":2,"isFruit":true},

    {"id":8,"product_name":"Palta","price":29.3,"organic":false,"description":"Conocida como aguacate en gran parte de Latinoamérica, es el fruto con forma de pera y de color verde oliva del aguacatero","stock":8,"isFruit":true},

    {"id":9,"product_name":"Cebolla","price":72.2,"organic":false,"description":"Es el bulbo subterráneo y comestible que crece en la planta del mismo nombre.","stock":2,"isFruit":false}
]

export default function getStock () 
{
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve (stock);
        },1200);
    } );
}

export function getProduct( id )
{
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve (stock[id]);
        },1200);
    } );
}