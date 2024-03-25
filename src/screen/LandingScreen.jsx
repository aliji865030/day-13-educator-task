import React, { useEffect, useReducer } from 'react'
import { data } from '../component/data';
import EmployeeList from '../component/EmployeeList';
import TeamList from '../component/TeamList';

let initialState={
    allEmployees:data,
    teamMembers:[],
    averageAge:0
}
const reducer = (state, action) => {
    // ... (Your existing reducer code)
    switch (action.type) {
      case "ADD_MEMBER":
        // code to add member
        
        return{
            ...state,
            allEmployees:state.allEmployees.map((item)=>item.id===action.payload.id?{...item,added:true}:item),
            teamMembers:[...state.teamMembers,action.payload]

        }
  
      case "REMOVE_MEMBER":
        return {
        // code to remove member
        ...state,
        teamMembers:state.teamMembers.filter((member)=>member.id!=action.payload.id),
        allEmployees:state.allEmployees.map((item)=>item.id===action.payload.id?{...item,added:false}:item)
        };
  
      case "CALCULATE_AVERAGE":
       // code to calculate average
       let totalAge=state.teamMembers.reduce((acc,curr)=>acc+curr.age,0)
       let age=state.teamMembers.length>0?Math.floor(totalAge/state.teamMembers.length):0
       console.log(age);
        return{
           ...state,
           averageAge:age
        }
  
      case "SORT_BY_AGE":
        let shortedList=[...state.teamMembers].sort((a,b)=>a.age-b.age)
        return {
        // code to sort by age
        ...state,
        teamMembers:shortedList
        };
  
      default:
        return state;
    }
    
    return state;
  };



const LandingScreen = () => {


    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div className='flex w-full justify-center gap-10 items-center h-screen'>
      <EmployeeList employees={state.allEmployees} dispatch={dispatch} />
      <TeamList teamMembers={state.teamMembers} age={state.averageAge} dispatch={dispatch} />
      
    </div>
  )
}

export default LandingScreen
