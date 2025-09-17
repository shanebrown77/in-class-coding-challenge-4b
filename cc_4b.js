// in class coding challenge 4b

let products = [

{SKU:"SKU-001", name:"xbox", category:"electronics", price:299.00 , inventory:100       }, 
{SKU:"SKU-002", name:"mango", category:"groceries", price: 5.00 , inventory:2000        }, 
{SKU:"SKU-003", name:"hoodie", category:"apparel", price:19.99 , inventory:200          }, 
{SKU:"SKU-004", name:"desk lamp", category:"household", price:49.99 , inventory:50      }, 
{SKU:"SKU-005", name:"midi piano", category:"electronics", price:130.00 , inventory:55  }, 


]

// category discounts
for (let product of products) {
let discount = 0;

switch (product.category) {
    case "electronics":
        discount = .20
        break; 
    case "apparel":
        discount = 0.15
        break;
    case "household":
    case "groceries":
        discount = .10
        break;
    default: 
        discount = 0
}

let promoPrice = (product.price * (1 - discount).toFixed(2));
product.promoPrice = promoPrice;



}
console.log(products);



// customer type adjustment 






