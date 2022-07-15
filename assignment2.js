
var kiosk=[
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
    let m=kiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${m.price*quantity}`)
    }
    getTotalCost("Apple",2)
    
    class KioskCalc {
    constructor(fruit, quantity){
    this.fruit = fruit
    this.quantity = quantity
    this.fruitPriceList = {"Orange": 30, "Mango": 40, "Avocado": 20 };
    this.getTotalCost = function () {
    return ` ${quantity} ${fruit} for KES ${quantity * this.price}`
    }
    }
    }
    KioskCalc.prototype.price = 30;
    
    var kiosk = new KioskCalc('Mango', 2);
    console.log(kiosk.getTotalCost());