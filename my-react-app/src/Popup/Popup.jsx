import {useState} from "react";
import styles from "./Popup.module.css";

function Popup() {
   return <div className={styles.Popup} >
      <h3 className={styles.title} >Are you sure you want to delete ?</h3>

      <button className="noBtn" >NO</button>
      <button className="yesBtn" >YES</button>
   </div>;
}

export default Popup;
