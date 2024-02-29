import {useState} from "react";

function Counter() {
   const [count, setCount] = useState(0);

   function decrement() {
      setCount(count - 1);
   }
   function setZero() {
      setCount(0);
   }
   function increment() {
      setCount(count + 1);
   }

   return (
      <div className="counter-container">
         <h3>{count}</h3>

         <button onClick={decrement}>-</button>
         <button onClick={setZero}>0</button>
         <button onClick={increment}>+</button>
      </div>
   );
}

export default Counter;
