
var prices=[
    {
    name :"Orange",
    price : 30,
    },
    {
    name :"Apple",
    price : 40,
    },
    {
    name :"Guava",
    price : 10,
    }]
    function getTotalCost(name,quantity){
    let m=prices.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${m.price*quantity}`)
    }
    getTotalCost("Apple",2)
    
    class KioskPrices {
    constructor(fruit, quantity){
    this.fruit = fruit
    this.quantity = quantity
    this.fruitPriceList = {"Orange": 30, "Mango": 40, "Avocado": 20 };
    this.getTotalCost = function () {
    return ` ${quantity} ${fruit} for KES ${quantity * this.fruitPriceList[fruit]}`
    }
    }
    }
    var kiosk = new KioskPrices('Avocado', 2);
    console.log(kiosk.getTotalCost());