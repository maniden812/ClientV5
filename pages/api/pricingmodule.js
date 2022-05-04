function pricingmodule(gallons, pricing, location) {
    if (location=="TX"){
        return gallons * pricing;}
    else{
      return gallons * pricing * 1.05;
    }
  }
  module.exports = pricingmodule;