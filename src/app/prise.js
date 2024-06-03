const priseA = (money) => {
  return money == 200 ? "VIP client" : "visiteur";
};

const priseB = (money) => {
  return money >= 100 ? "2 client" : "1 client";
};

// module.exports= { priseA, priseB };
export { priseA, priseB };
