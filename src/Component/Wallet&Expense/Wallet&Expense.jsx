
import "./WalletExpense.css";
import {appWallet, appExpense} from "../../applicationData";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { AddExpense, AddBalance, EditExpense } from "../modal/modal";
import PiChart from "../Pi-Chart/piChart";

Modal.setAppElement("#root");

export default function WalletExpense( props) {
  const [modalClass, setModalClass] = useState("true");
  const [modalBox, setModalBox] = useState({addExp:"true", addBal:"true", editExp:"true"});
  const [updateTableData, setUpdateTableData] = useState([]);


  return (
    <>
      {modalClass === "false" && modalBox.addExp ==="false" ? 
      <><AddExpense classModal={modalClass} setClassModal={setModalClass}  setUpdateTableData={props.setUpdateTableData}/></> : false }
      
      {modalClass === "false" && modalBox.addBal ==="false" ? 
      <><AddBalance classModal={modalClass} setClassModal={setModalClass}/></> : false }

      <>
        <div className="outer">
          <div className="head">
            WalletBalance: <span className="subhead">₹ {appWallet.appWallet}</span>
          </div>
          <div>
            <button
              onClick={() => {
                setModalBox({addExp:"false"})
                setModalClass("false");
              }}
              className="button"
            >
              + Add Income
            </button>
          </div>
        </div>
        <div className="outer">
          <div className="head">
            Expenses: <span className="subhead">₹ {appExpense.appExpense}</span>
          </div>
          <div>
            <button onClick={() => {
              setModalBox({addBal:"false"})
                setModalClass("false");
              }} className="button redcolor">+ Add Expense</button>
          </div>
        </div>
        <PiChart />
      </>
    </>
  );





  // return (
  //   <>
  //     {modalClass === "false" && modalBox.addExp ==="false" ? 
  //     <><AddExpense classModal={modalClass} setClassModal={setModalClass} /></> : false }
      
  //     {modalClass === "false" && modalBox.addBal ==="false" ? 
  //     <><AddBalance classModal={modalClass} setClassModal={setModalClass}/></> : false }

  //     <>
  //       <div className="outer">
  //         <div className="head">
  //           WalletBalance: <span className="subhead">₹ {props.appWallet}</span>
  //         </div>
  //         <div>
  //           <button
  //             onClick={() => {
  //               setModalBox({addExp:"false"})
  //               setModalClass("false");
  //             }}
  //             className="button"
  //           >
  //             + Add Income
  //           </button>
  //         </div>
  //       </div>
  //       <div className="outer">
  //         <div className="head">
  //           Expenses: <span className="subhead">₹ {props.appExpense}</span>
  //         </div>
  //         <div>
  //           <button onClick={() => {
  //             setModalBox({addBal:"false"})
  //               setModalClass("false");
  //             }} className="button redcolor">+ Add Expense</button>
  //         </div>
  //       </div>
  //       <PiChart />
  //     </>
  //   </>
  // );
}
