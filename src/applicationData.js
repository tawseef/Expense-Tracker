const applicationData = { title: "Dummy", price: 10, category: "Dummy", date: "Dummy"};


const tableData = [
    { title: "Dummy", price: 1, category: "Dummy", date: "Dummy"},
];

function updatetableData(){
    console.log("**"+tableData.length)
    return tableData.length;
}

const updatedData = tableData;
if(tableData.length=== tableData.length+1){
    updatedData = tableData;
}


const appWallet = {appWallet: 4000};

const appExpense = {appExpense:500};

function addExpense(value){
    if(appWallet.appWallet>0){
        appExpense.appExpense+=parseInt(value);
        appWallet.appWallet-=parseInt(value);
    }
}

function addMoneyInWallet(value){
    appWallet.appWallet= appWallet.appWallet + parseInt(value);
}

const categories = [ "Food", "Entertainment", "Travel"];

export {applicationData, addMoneyInWallet, appWallet, addExpense, appExpense, categories, tableData, updatetableData, updatedData};