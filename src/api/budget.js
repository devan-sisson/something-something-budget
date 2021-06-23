/**
 * What are the basic attributes of a budget?
 * better yet:
 * as a user I can:
 *  - build a list of monthly budget items
 *  - define how many paychecks I have to work with
 *  - determine which budget item is paid by which paycheck
 *  - "check off" if a budget Item has been funded
 *  - "check off" if a budget Item has been paid
 */

// { budgetItem
//   id: String,
//   funded: Boolean,
//   paid: Boolean,
//   name: String,
//   paycheck: Number, // enum, basically #Note
//   amount: Number,
// }

let itemId = 101;

const store = [
  {
    id: 10,
    funded: false,
    paid: false,
    name: "Rent",
    paycheck: 2, // enum, basically
    amount: 1400,
  },
];

const budget = {
  addItem({ funded = false, paid = false, name, paycheck, amount }) {
    store.push({
      id: itemId++,
      funded,
      paid,
      name,
      paycheck,
      amount,
    });
    return store;
  },
  getBudget(){
    return store;
  }
};

export default budget;
