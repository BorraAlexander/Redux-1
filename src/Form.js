import { useDispatch } from "react-redux";
import { useState } from "react";

// import "/bootstrap/dist/css/bootstrap.min.css";

function Form() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState(null);
  return (
    <>
      <div className="container">
        <h1 className="text-success mb-1">Enter User Details</h1>
        <div className="row">
          <div className="col-4">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Amount"
              onChange={(e) => {
                let data = e.target.value;
                setAmount(data);
                setAmount("");
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1"
            onClick={() => {
              dispatch({ type: "deposit", payload: amount });
            }}
          >
            Deposit
          </button>
          <button
            className="btn btn-danger mx-2 col-1"
            onClick={() => {
              dispatch({ type: "withdraw", payload: amount });
            }}
          >
            Withdraw
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter fullName"
              onChange={(e) => {
                let data = e.target.value;
                setFullName(data);
                setFullName("");
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1"
            onClick={() => {
              dispatch({ type: "fullName", payload: fullName });
            }}
          >
            Update Name
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter mobileNo"
              onChange={(e) => {
                let data = e.target.value;
                setMobileNo(data);
                setMobileNo("");
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1"
            onClick={() => {
              dispatch({ type: "mobileNo", payload: mobileNo });
            }}
          >
            Update MobileNo
          </button>
        </div>
        <button
          className="btn btn-danger mt-2 col-1"
          onClick={() => {
            dispatch({ type: "reSet" });
          }}
        >
          ReSet
        </button>
      </div>
    </>
  );
}

export default Form;
