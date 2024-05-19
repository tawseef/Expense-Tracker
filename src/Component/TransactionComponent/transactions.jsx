import React, { useState, useEffect } from "react";
import { applicationData } from "../../applicationData";
import { MdLuggage, MdCancel, MdEdit } from "react-icons/md";
import { PiPizzaDuotone } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import "./transaction.css";
import { tableData, addMoneyInWallet } from "../../applicationData";
import { EditExpense } from "../modal/modal";

export default function Transaction(props) {
  const [modalClass, setModalClass] = useState("true");
  const [fullData, setFullData] = useState([]);
  const [dispData, setDispData] = useState([]);
  const [lastIndex, setLastIndex] = useState(10);
  const [firstIndex, setFirstIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [editIndex, setEditIndex]= useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        let settingData;
        if (tableData.length !== 0) settingData = tableData;

        setFullData(settingData);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const getNextPage = () => {
    setPageNum((prev) => prev + 1);
    setFirstIndex((prev) => prev + 10);
    setLastIndex((prev) => prev + 10);
  };

  const getPrevPage = () => {
    setPageNum((prev) => prev - 1);
    setFirstIndex((prev) => prev - 10);
    setLastIndex((prev) => prev - 10);
  };

  let filterData;
  if (tableData.length !== 0) {
    filterData = fullData.filter((ele, ind) => {
      if (ind < lastIndex && ind >= firstIndex) {
        return ele;
      }
    });
  }

  useEffect(() => {
    setDispData(filterData);
  }, [dispData, firstIndex, lastIndex]);

  const handleDelete = (index) => {
    addMoneyInWallet(fullData[index].price);
    const updatedFullData = fullData.filter((_, i) => i !== index);
    setFullData(updatedFullData);
    const updatedDispData = updatedFullData.filter((_, i) => i >= firstIndex && i < lastIndex);
    setDispData(updatedDispData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setModalClass("false");
  };

  return (
    <>
     {modalClass === "false" ? 
      <><EditExpense editIndex={editIndex} classModal={modalClass} setClassModal={setModalClass} /></> : false }

      <div className="table">
        {dispData.map((ele,ind) => {
          return (
            <div className="tableSection" key={ind+1}>
              <div className="imgAndTitleDiv">
                <PiPizzaDuotone className="image" />{" "}
                <span className="upLine">
                  {ele.title} <br />
                  <span className="subLine">{ele.date}</span>
                </span>
              </div>
              <div className="amtColor">
                ₹ {ele.price} <MdCancel onClick={()=>handleDelete(firstIndex + ind)} className="image cancelIcon" />{" "}
                {/* <MdEdit  className="image editIcon" /> */}
                <MdEdit
                    className="image editIcon"
                    onClick={()=>handleEdit(firstIndex + ind)}
                  />
              </div>
            </div>
          );
        })}
        <div className="tableButtonDiv">
          <button
            className="tableButton"
            onClick={() => {
              if (firstIndex > 0) getPrevPage();
            }}
          >
            ←
          </button>
          <button className="page">{pageNum}</button>
          <button
            className="tableButton"
            onClick={() => {
              if (pageNum < Math.round(fullData.length / 10)) getNextPage();
            }}
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
