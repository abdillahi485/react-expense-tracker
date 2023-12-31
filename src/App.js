import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";


function App() {
  const [balance,setBalance]=useState(0)
  const [expenses,setExpense]=useState([{
    id:1,amount:30,description:"food",
    id:2,amount:40,description:"rent"
  
  }])

  function addNewExpense(amount,description){
    
    let newId
    if(expenses.length >= 1){
      newId=expenses[expenses.length -1].id + 1
      setBalance(balance + Number(amount))

    }else{
      newId=1
      setBalance(Number(amount))
    }
    const updatedExpenses=expenses.concat({id:newId,amount:amount,description:description})
    setExpense(updatedExpenses)
    
   
  }
  const removeExpense = (itemId) => {
    setExpense(prevItems => prevItems.filter(item => item.id !== itemId));
    // console.log(amount)      
    // if(balance > 0){
    //   setBalance(balance - Number(amount))
    // }
    
  };


  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total={balance}/>
          <Add addExp={addNewExpense}/>
          {expenses.map((expense)=><Expenses data={expense} remove={removeExpense}/>)}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
