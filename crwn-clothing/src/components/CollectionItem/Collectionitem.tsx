import React from 'react'
import './CollectionItem.scss'

interface MyProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Collectionitem: React.FunctionComponent<MyProps> = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

    </div>
  )
}

export default Collectionitem
