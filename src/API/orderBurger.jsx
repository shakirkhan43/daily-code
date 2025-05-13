function OrderBurger(orderReady) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   if (orderReady) {
    //     resolve("🍔 Burger Delivered! ");
    //   } else {
    //     reject("❌ Burger Not Ready");
    //   }
    // }, 2000);
  });
}



OrderBurger(true)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

  export default OrderBurger;