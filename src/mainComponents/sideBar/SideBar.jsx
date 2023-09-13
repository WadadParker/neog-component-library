import styles from "./sideBar.module.css";

import React from 'react'


export const SideBar = () => {
  return (
    <nav className={styles.navbar}>
        <li className={styles.list}>
            Home
        </li>
        <li className={styles.list}>
            Components
        </li>
        <li className={styles.list}>
            <a className={styles.link} href="https://github.com/WadadParker/neog-component-library" target="_blank">Github</a>
        </li>
    </nav>
  )
}
