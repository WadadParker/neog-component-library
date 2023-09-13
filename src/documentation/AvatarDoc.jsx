import React from 'react'
import { Avatar } from '../components'

export const AvatarDoc = () => {
  const imageLink="https://storage.ko-fi.com/cdn/useruploads/display/8a8b9790-7303-4aee-881a-23ab131fa400_gear5daycopy.png";
  return (
    <div>
      <h1>Avatar Component</h1>
      <p>The Avatar Component displays an image representing a user or entity</p>
      <Avatar size="xxs" name="joyboy" src={imageLink}/>
      <Avatar size="sm" name="joyboy" src={imageLink}/>
      <Avatar size="lg" name="joyboy" src={imageLink}/>
    </div>
  )
}
