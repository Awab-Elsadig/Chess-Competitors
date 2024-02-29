import {useState} from "react";
import Popup from "../Popup/Popup";
import styles from "./ToDoList.module.css";

function ToDoList() {
   const [tasks, setTasks] = useState([]);
   const [showPopup, setShowPopup] = useState(false);

   function addTask() {
      const input = document.querySelector(`.${styles.inputField} input`);
      const newTask = input.value;

      if (input.value.trim()) {
         setTasks((t) => [...t, newTask]);
      }

      input.value = "";
   }

   function removeTask(index) {
      setShowPopup(true);
   }

   function removeTask(index) {
      setTasks((t) => t.filter((_, i) => i + 1 !== index));
   }

   function changeOrder(direction, index) {
      const updatedTasks = [...tasks];
      if (direction === "up") {
         if (index > 0) {
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
         } else {
            console.log("Not Possible, First One");
         }
      } else {
         if (index < tasks.length - 1) {
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
         } else {
            console.log("Not Possible, Last One");
         }
      }
      setTasks(updatedTasks);
   }

   function checkEnter(e) {
      if (e.keyCode === 13) addTask();
   }

   return (
      <div className={styles.container}>
         <h2>To Do List</h2>

         <div className={styles.inputField}>
            <input type="text" placeholder="Enter a task" onKeyDown={checkEnter} />
            <button onClick={addTask}>Add</button>
         </div>
         <div className={styles.tasks}>
            {tasks.map((t, i) => (
               <div className={styles.task} key={i}>
                  <h4 className={styles.job}>
                     {i + 1}. {t}
                  </h4>
                  <div className={styles.buttons}>
                     <button className={styles.removeBtn} onClick={() => removeTask(i + 1)}>
                        Delete
                     </button>
                     <button className={styles.up} onClick={() => changeOrder("up", i)}>
                        ☝️
                     </button>
                     <button className={styles.down} onClick={() => changeOrder("down", i)}>
                        👇
                     </button>
                  </div>
               </div>
            ))}
         </div>

         {/* Render the Popup component based on the showPopup state */}
         {showPopup && <Popup />}
      </div>
   );
}

export default ToDoList;
