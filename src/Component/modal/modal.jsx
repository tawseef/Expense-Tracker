import React, { useEffect, useState } from "react";
import "./modal.css";
import { tableData, appExpense, addExpense, addMoneyInWallet } from "../../applicationData";

function AddExpense({ classModal, setClassModal, setUpdateTableData }) {

  const [data, setData] = useState({title:"", price:0, category:"", date:"", amount:0});

  const [cssValue, setCssValue] = useState(classModal);

  // const [newData, setNewData] = useState([])
  
  const handleSubmit = () => {
    tableData.push(data);
    setUpdateTableData(tableData);
    setCssValue("true");
    setClassModal("true");
  };
  
  const handleCancel = () => {
      setCssValue("true");
      setClassModal("true");
  };

  return (
    <div className={cssValue}>
      <div className="modalBack">
        <div className="modalwrapper">
          <h1 className="head black">Add Expenses</h1>
          {/* <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              tableData.push(data);
              handleSubmit();
            }}
          > */}
            <div>
            <input required
              className="inpBox"
              type="text"
              placeholder="Title"
              value={data.title}
              onChange={(e) => {setData({...data,title: e.target.value})}}
            /> 
              <input required
                className="inpBox"
                type="number"
                placeholder="Price"
                value={data.price}
                onChange={(e) => setData({...data, price: e.target.value})}
              /></div>
            <div>
            <input required
              className="inpBox"
              type="text"
              placeholder="Select Category"
              value={data.category}
              onChange={(e) => setData({...data, category: e.target.value})}
            />
            <input required
              className="inpBox"
              type="date"
              value={data.date}
              onChange={(e) => setData({...data, date: e.target.value})}
            />
            </div>
            <div>
              <button
                type="Submit"
                className="btn"
                onClick={handleSubmit}
              >
                Add Expense
              </button>
              <button
                onClick={handleCancel}
                className="btn color"
              >
                Cancel
              </button>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}


function EditExpense({ classModal, setClassModal, editIndex }) {
  const [data, setData] = useState({title:"", price:0, category:"", date:""});  
  const [cssValue, setCssValue] = useState(classModal);
  const [prevPrice, setPrevPrice] = useState(0);
  
  useEffect(()=>{
    if (editIndex !== null && tableData[editIndex]) {
      setData(tableData[editIndex]);
      setPrevPrice(tableData[editIndex].price);
    }
  }, [editIndex])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = () => {
    tableData[editIndex] = {...data};
    if(tableData[editIndex].price < prevPrice) addMoneyInWallet(-prevPrice);
    if(tableData[editIndex].price > prevPrice) addMoneyInWallet(prevPrice);
    setCssValue("true");
    setClassModal("true");
  };
  
  const handleCancel = () => {
      setCssValue("true");
      setClassModal("true");
  };

  return (
    <div className={cssValue}>
      <div className="modalBack">
        <div className="modalwrapper">
          <h1 className="head black">Edit Expenses</h1>
            <div>
            <input
              className="inpBox"
              type="text"
              placeholder="Title"
              value={data.title}
              name="title"
              onChange={handleChange}
            /> 
            <input
              className="inpBox"
              type="number"
              placeholder="Price"
              value={data.price}
              name="price"
              onChange={handleChange}
            /></div>
            <div>
            <input
              className="inpBox"
              type="text"
              placeholder="Select Category"
              value={data.category}
              name="category"
              onChange={handleChange}
            />
            <input
              className="inpBox"
              type="date"
              value={data.date}
              name="date"
              onChange={handleChange}
            />
            </div>
            <div>
              <button
                type="Submit"
                className="btn"
                onClick={handleSubmit}
              >
                Add Expense
              </button>
              <button
                onClick={handleCancel}
                className="btn color"
              >
                Cancel
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}



function AddBalance({ classModal, setClassModal }) {
  const [data, setData] = useState({title:"", price:0, category:"", date:"", amount:0});  
  const [cssValue, setCssValue] = useState(classModal);
  const [exp, setExp] = useState(0);

  const handleSubmit = () => {
    addExpense(exp); 
    setCssValue("true");
    setClassModal("true");
  };
  
  const handleCancel = () => {
      setCssValue("true");
      setClassModal("true");
  };

  return (
    <div className={cssValue}>
      <div className="modalBack">
        <div className="modalwrapper">
          <h1 className="head black">Add Balance</h1>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div>
            <input
              className="inpBox"
              type="number"
              placeholder="Income Amount"
              onChange={(e) => setExp(e.target.value)}
            /> 
            </div>
            <div>
              <button
                type="Submit"
                className="btn"
              >
                Add Balance
              </button>
              <button
                onClick={handleCancel}
                className="btn color"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export {AddExpense, EditExpense, AddBalance}