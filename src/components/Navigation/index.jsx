import React from 'react'
import { RiHome3Fill } from 'react-icons/ri';
import { IoIosListBox } from 'react-icons/io';
import Avatar from '../Avatar'
import IconLink from '../IconLink'

const isUser = true;


export default function Navigation() {
  if (!isUser) return null

  return <nav>
    <Avatar path="/mybugs" />
    <IconLink path='/dashboard/projects' exact>
      <RiHome3Fill />
    </IconLink>
    <IconLink path='/bugs'>
      <IoIosListBox />
    </IconLink>
  </nav>
}