import {useReducer} from "react";

const reducer=(state, action)=>{
  console.log(action);
  return { count: 1};
};
         // state bu yerda initial valuega teng 
         // action esa dispatchga teng 


const App=()=>{                  //function ->initial value
 // const[state, dispatch]=useReducer(()=>{},       {});
    const[state, dispatch]=useReducer(reducer,  {
      count: 0,                                                           
    });
  return<div>
    <button onClick={()=>dispatch({type: "incr"})}>+</button>
    {state.count}
    <button onClick={()=>dispatch({type: "decr"})}>-</button>
    {state.count}
    <button onClick={()=>dispatch({type: "decr"})}>-</button>
    <button></button>
  </div>
}

export default App;

// Bitta useReducerni uzi butun component ichidgi statelarni kontrol qilaoladi