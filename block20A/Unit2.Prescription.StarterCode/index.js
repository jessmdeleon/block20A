/**
 * Calculates the total cost of all refills.
 * @param {number} pricePerRefill
 * @param {number} refills
 * @returns {number} total cost of all refills
 */
function getTotalCost(pricePerRefill, refills) {
  return pricePerRefill * refills;
}

/**
 * If the customer has a subscription, apply a 25% discount
 * to the total cost of the refills.
 * @param {number} totalCostWithoutDiscounts
 * @param {boolean} isSubscribed whether the user has a subscription
 * @returns {number} total cost with subscription discount
 */
function applyDiscount(totalCostWithoutDiscounts, isSubscribed) {
  return totalCostWithoutDiscounts * (isSubscribed ? 0.75 : 1); 
} //QUESTION: 1. WHAT IS THE DISCOUNT FOR A SUBSCRIPTION?
//the discount for a subscription is 25% as indicated by the line above (line 19)
//if 'isSubscribed' is 'true' indicating the customer has a subscription then the total cost 
//is multiplied by 0.75 which is equivalent to a 25% discount

/**
 * If the customer has a coupon, apply a $10 discount to
 * the total cost of the refills after the subscription discount.
 * @param {number} costAfterSubscription
 * @param {boolean} hasCoupon whether the customer is using a coupon
 * @returns
 */

function applyCoupon(costAfterSubscription, hasCoupon) {
  return costAfterSubscription - (hasCoupon ? 10 : 0);
}//QUESTION: 2. HOW MUCH MONEY DOES A COUPON SAVE?
//a coupon saves $10, as indicated by the line 33 
//if 'hasCoupon' is 'true' indicating the customer is using a coupon then $10 is subtracted 
//from the cost after applying the subscription discount 

/**
 * Calculates the cost of a subscription based on input values
 * and displays the result on the page.
 */
function calculateCost() {
  const pricePerRefill = document.querySelector("#price");
  const refills = document.querySelector("#refills");
  const subscription = document.querySelector("#subscribed");
  const coupon = document.querySelector("#coupon");

  const output = document.querySelector("#cost");

  const initialCost = getTotalCost(pricePerRefill.value, refills.value);
  const costAfterSubscription = applyDiscount(
    initialCost,
    subscription.checked
  );
  const finalCost = applyCoupon(costAfterSubscription, coupon.checked);
  // QUESTION 3. IS THE COUPON APPLIED BEFORE OR AFTER THE SUBSCRIPTION DISCOUNT?
//the coupon is applied after the subscription discount. First, the subscription discount is
//applied through the 'applyDiscount' function and then if applicable the coupon discount 
//is applied through the 'applyCoupon' function

  output.textContent = `$${finalCost.toFixed(2)}`;
}

if (typeof module !== "undefined") {
  module.exports = {
    getTotalCost,
    applyDiscount,
    applyCoupon,
    calculateCost,
  };
} else {
  const calculateButton = document.querySelector("#calculate");
  calculateButton.addEventListener("click", calculateCost);
}

//QUESTION 4. WHAT HAPPENS WHEN THE CALCULATE BUTTON IS CLICKED? 
//when the calculate button is clicked the 'calculateCost' function in invoked 
//this function retrieves the input values for price per refill, number of refills, subscription 
//status and coupon usage from the HTML elements then it calculates the initial cost of refills 
//applies a subscription discount if the user is subscribed applies a coupon discount if the user
//has a coupon and finally displays the final cost on the page 