import React, {useEffect, useState} from "react";
import api from "../api";

const Budget = () => {
  
  useEffect(() => {
    api.budget.getBudget();
  })


  return (
    <div>
     <h1>THIS IS TOTALLY A BUDGET!!!</h1>
     <button onClick={()=>{setNewItem({ name: "new bike", paycheck: 1, amount: 100 })}}>C'mon click me</button>
     <
    </div>
  );
};

export default Budget;
