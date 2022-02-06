import Pizza from "./pizza";
class Restaurant {

   
  private orders: Pizza[] = [];
  private doughQueue: Pizza[] = [];
  private toppingQueue: Pizza[] = [];
  private ovenQueue: Pizza[] = [];
  private serveQueue: Pizza[] = [];
  private count:number = 0;

  constructor(orders: Pizza[]) {
    this.orders = orders;
  }


  private doughChefs: number = 2;
  private toppingChefs: number = 3;
  private oven: number = 1;
  private waiters: number = 2;

  setOrders(orders:Pizza[]){
        this.orders = orders;
        this.startOrders();
  }


  private async DoughPizza(){
    
    console.log("start dough pizza" + (this.doughQueue[this.doughQueue.length-1]).num + ": " + Date.now());
    setTimeout(() => {
      console.log("end dough pizza: "  + (this.doughQueue[this.doughQueue.length-1]).num + ": "+ Date.now());
      this.toppingQueue.push( this.doughQueue.pop()!)
      this.startOrders();
    }, 7000);
  }

  private async ToppingPizza() {
    console.log("start topping pizza: " +(this.toppingQueue[this.toppingQueue.length-1]).num + ": " + Date.now());
    setTimeout(() => {
      console.log("end topping done! "  + (this.toppingQueue[this.toppingQueue.length-1]).num + ": " +Date.now());
      this.ovenQueue.push(  this.toppingQueue.pop()!)
      this.startOrders();
    }, 4000);
  }

//   private async Oven() {
//     console.log("start oven pizza: " + (this.count++) + ": " + Date.now());
//     setTimeout(() => {
//       console.log("end oven done! " + (this.count++) + ": " + Date.now());
//       this.serveQueue.push(this.ovenQueue.pop()!);
//       this.startOrders();
//     }, 10000);
//   }
//   private async Serve() {
//     console.log("start serve pizza: " + (this.count++) + ": " + Date.now());
//     setTimeout(() => {
//       console.log("end serve done! " + (this.count++) + ": " + Date.now());
//       this.serveQueue.pop()
//       this.startOrders();
//     }, 5000);
  //}

  async startOrders() {
    console.log("boo")
      while(this.doughQueue.length < 2 && this.orders.length != 0) {      
          this.doughQueue.push(this.orders.pop()!)
          await this.DoughPizza();
      }
      if (this.toppingQueue.length < 3 && this.toppingQueue.length > 0) {
          await this.ToppingPizza()
      }
    //   if (this.ovenQueue.length == 1) {
    //       await this.Oven()
    //   }
    //   if (this.serveQueue.length < 2 && this.serveQueue.length > 0) {
    //       await this.Serve()
    //   }
      console.log(this.toppingQueue.length)
    
    console.log("end")
  }
}
export default Restaurant