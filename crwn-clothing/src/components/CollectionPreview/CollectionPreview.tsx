import React from 'react'
import { Item } from '../../typings/index'
import './CollectionPreview.scss'

import { CollectionItem } from '../CollectionItem'

interface MyProps {
  title: string;
  items: Item[]
}

const CollectionPreview: React.FunctionComponent<MyProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items.filter((item, index) => index < 4)
          .map(({ id, ...itemProps}) => (
            <CollectionItem
              key={id}
              id={id}
              {...itemProps}
            />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview
