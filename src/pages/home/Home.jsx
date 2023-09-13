import styles from "./home.module.css";

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {Alert, Avatar, Badge, Button, IconButton, FloatingButton, Heading, Text} from "../../components";

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
      <section className={styles.sectionTwo}>
        <Button type="primary" text="Solid button"/>
        <Button type="link" text="Solid button" link="https://google.com"/>
        <br />
        <IconButton type="search" />
        <IconButton type="delete" />
        <IconButton type="add" />
        <IconButton type="edit" />
        <br />
        <FloatingButton type="logout"/>
        <FloatingButton />
      </section>
      <section className={styles.sectionTwo}>
        <Heading type="sm">This is a small Heading</Heading>
        <Text type="sm">This is a small text</Text>
        <Text type="xxxlg">This is a small text</Text>
      </section>
    </div>
  )
}