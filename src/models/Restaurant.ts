import e from "express";
import Pizza from "./Pizza";
class Restaurant {
  private orders: Pizza[] = [];
  private doughQueue: Pizza[] = [];
  private toppingQueue: Pizza[] = [];
  private ovenQueue: Pizza[] = [];
  private serveQueue: Pizza[] = [];

  constructor(orders: Pizza[]) {
    this.orders = orders;
  }

  private doughChefs: number = 0;
  private toppingChefs: number = 0;
  private oven: number = 0;
  private waiters: number = 0;

  setOrders(orders: Pizza[]) {
    //orders.forEach(order => this.orders.push(order))
    this.orders = orders;
    this.startOrders();
  }


  private DoughPizza(pizza: Pizza) {
    this.doughChefs++;
    console.log("start dough pizza: " + pizza.index + ": " + Date.now());
    setTimeout(() => {
      console.log("end dough pizza: " + pizza.index + ": " + Date.now());
      this.toppingQueue.push(pizza);
      this.doughChefs--;
      this.startOrders();
    }, 7000);
    this.startOrders();
  }

  private ToppingPizza(pizza: Pizza) {
    this.toppingChefs++;
    console.log("start topping pizza: " + pizza.index + ": " + Date.now());
    setTimeout(() => {
      console.log("end topping done!  " + pizza.index + ": " + Date.now());
      pizza.HandleTopings();
      this.ovenQueue.push(pizza);
      this.toppingChefs--;
      this.startOrders();
    }, 4000);
    this.startOrders();
  }
  private OvenPizza(pizza: Pizza) {
    this.oven++;
    console.log("start oven pizza: " + pizza.index + ": " + Date.now());
    setTimeout(() => {
      console.log("end oven done! " + pizza.index + ": " + Date.now());
      this.serveQueue.push(pizza);
      this.oven--;
      this.startOrders();
    }, 10000);
    this.startOrders();
  }
  private Serve(pizza: Pizza) {
    this.waiters++;
    console.log("start serve pizza: " + pizza.index + ": " + Date.now());
    setTimeout(() => {
      console.log("end serve done! " + pizza.index + ": " + Date.now());
      this.waiters--;
      this.startOrders();
    }, 5000);
    this.startOrders();
  }
  startOrders() {
    if (
      this.orders.length > 0 ||
      this.doughQueue.length > 0 ||
      this.toppingQueue.length > 0 ||
      this.ovenQueue.length > 0 ||
      this.serveQueue.length > 0
    ) {
      if (this.orders.length > 0) {
        this.doughQueue.push(this.orders.pop()!);
      }
      if (this.doughChefs < 2 && this.doughQueue.length > 0) {
        this.DoughPizza(this.doughQueue.splice(0, 1)[0]!);
      } else if (this.toppingChefs < 3 && this.toppingQueue.length > 0) {
        this.ToppingPizza(this.toppingQueue.splice(0, 1)[0]!);
      } else if (this.oven < 1 && this.ovenQueue.length > 0) {
        this.OvenPizza(this.ovenQueue.splice(0, 1)[0]!);
      } else if (this.waiters < 2 && this.serveQueue.length > 0) {
        this.Serve(this.serveQueue.splice(0, 1)[0]!);
      }
    }
  }
}

export default Restaurant;
