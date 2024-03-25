// EmployeeList.js

import React from "react";

const EmployeeList = ({ employees, dispatch }) => {
  return (
    <div className="employee-list w-4/12 border-8 border-gray-800 overflow-scroll" style={{height:"500px"}}>
      <h2 className="text-3xl font-semibold text-white bg-slate-400 py-3 pb-4">Employee's List</h2>
      {employees.map((employee) => (
        <div key={employee.id} className=" bg-slate-200 my-3 py-1 ">
          <span className={employee.added ? " text-gray-500" : " text-black" } style={{fontSize:"18px"}}>
            {employee.first_name} {employee.last_name} - {employee.age} years
            old
          </span>
          {!employee.added && (
            <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white mx-5"
              onClick={() =>
                dispatch({ type: "ADD_MEMBER", payload: employee })
              }
            >
              ADD
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;