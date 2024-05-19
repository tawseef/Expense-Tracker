import { useState } from "react";
import "./Expense-module.css";
import WalletExpense from "../Wallet&Expense/Wallet&Expense";
import Transaction from "../TransactionComponent/transactions";
// import LineChart from "../LineChart/lineChart";
import LineChart from "../LineChart/lineChart";
import { appExpense, appWallet } from "../../applicationData";


export default function ExpensePage() {
  const [appData, setAppData] = useState({ title: "Dummy", price: 10, category: "Dummy", date: "Dummy"});
  // const [appWallet, setAppWallet] = useState(5000);
  const [updateTableData, setUpdateTableData] = useState([]);
  // console.log(updateTableData)

  
  const updateFunction = ({ title, price, category, date }) => {
    setAppData({ title: title, price: price, category: category, date: date})
  }

  return (
    <div>
      <div className="heading">Expense Tracker</div>
      <div className="firstRow">
        {/* <WalletExpense updateData={updateFunction} appWallet={appWallet} appExpense={appExpense}/> */}
        <WalletExpense setUpdateTableData={setUpdateTableData}/>
      </div>
      <div className="heading">Recent Transactions</div>
      <div className="secondRow">
        <Transaction  updateData={updateFunction}  appData={appData}/>
        <div className="chart"><LineChart updateTableData={updateTableData}/></div>
      </div>
    </div>
  );
}
