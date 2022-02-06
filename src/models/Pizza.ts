enum Toppings{
    CHESS,
    MEET,
    TOMATOS
}
class Pizza{
   private toppings: Toppings[];
   public num:number;
   dough = false;
   topping = false;
   oven = false;
   serving = false;
    constructor(toppings:Toppings[],num:number){
        this.toppings = toppings;
        this.num = num;
    }

}

export default  Pizza;