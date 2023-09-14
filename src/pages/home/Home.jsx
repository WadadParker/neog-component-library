import styles from "./home.module.css";

import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles[`home-container`]}>
      <h1>Wadad's Component Library</h1>
      <h5>Welcome to my CSS component library made up of React components. Navigate to components
        page and explore components you want to use in your project
      </h5>
      <span className={styles.button} onClick={()=>navigate("/components")}>
      <Button text={"Get Started"} />
      </span>
    </div>
  )
}