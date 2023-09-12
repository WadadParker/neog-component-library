import styles from "./home.module.css";

import React from 'react'

import {Alert} from "../../components";

export const Home = () => {
  return (
    <div className={styles[`home-container`]}>
      <h1>This is home for now, lets make alll them components</h1>
      <section className={styles.section}>
        <Alert status="error" message={"Invalid Credentials"}/>
        <Alert status="success" message="Registration Successful" />
        <Alert status="warning" message="Password does not match" />
        <Alert status="notify" message="check out the new discount" />
      </section>
    </div>
  )
}