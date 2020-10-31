import React, { useState } from 'react'
import { sections as fixedSections } from '../../constants/sections'
import { MenuItem } from '../MenuItem'
import './Directory.scss'

const Directory = () => {
  const [sections] = useState(fixedSections)

  return (
    <div className="directory-menu">
      {
        sections.map(({ title, id, imageUrl, size }) =>
          <MenuItem
            title={title}
            key={id}
            imageUrl={imageUrl}
            size={size}
          />)
      }
    </div>
  )
}

export default Directory
