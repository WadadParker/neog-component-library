import styles from "./home.module.css";

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {Alert, Avatar, Badge} from "../../components";

export const Home = () => {
  const imageLink="https://storage.ko-fi.com/cdn/useruploads/display/8a8b9790-7303-4aee-881a-23ab131fa400_gear5daycopy.png";
  return (
    <div className={styles[`home-container`]}>
      <h1>This is home for now, lets make alll them components</h1>
      <section className={styles.section}>
        <Alert status="notify" message="check out the new discount" />
        <section>
        <Avatar size="xxs" name="joyboy" src={imageLink}/>
        <Avatar size="sm" name="joyboy" src={imageLink}/>
        <Avatar size="lg" name="joyboy" src={imageLink}/>
        </section>
      </section>
      <section>
      <Badge icon={<FontAwesomeIcon icon={faCartShopping} />} quantity={1} />
      <Badge avatar={<Avatar size="sm" name="joyboy" src={imageLink}/>} status="online" />
      <Badge avatar={<Avatar size="lg" name="joyboy" src={imageLink}/>} status="offline" />
      <Badge avatar={<Avatar size="xxs" name="joyboy" src={imageLink}/>} status="busy" />
      </section>
    </div>
  )
}