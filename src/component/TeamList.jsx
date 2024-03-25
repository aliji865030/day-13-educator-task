import React from "react";

const TeamList = ({ age,teamMembers, dispatch }) => {
  return (
    <div className="employee-list w-4/12 border-8 border-gray-800 overflow-scroll" style={{height:"500px"}}>
    <h2 className="text-3xl font-semibold text-white bg-slate-400 py-3 pb-4">Team Members</h2>
    { teamMembers.map((member) => (
      <div key={member.id}  className=" bg-slate-200 my-3 py-1 flex justify-center " >
        <p style={{fontSize:"18px"}}>{member.first_name} {member.last_name} - {member.age} years old</p>
        <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white mx-5"
          onClick={() => dispatch({ type: "REMOVE_MEMBER", payload: member })}
        >
          REMOVE
        </button>
      </div>
    ))}
    <p className=" mt-10 bg-green-300 py-1 text-xl">Average Age: { age }</p>
   <div className="flex justify-center my-5">
   <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white mx-5" onClick={() => dispatch({ type: "CALCULATE_AVERAGE" })}>
      Calculate Average Age
    </button>
    <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white mx-5" onClick={() => dispatch({ type: "SORT_BY_AGE" })}>
      SORT BY AGE
    </button>
   </div>
  </div>
  );
};

export default TeamList;