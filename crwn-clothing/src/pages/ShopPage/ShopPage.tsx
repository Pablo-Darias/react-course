import React, { useState } from 'react'
import { CollectionPreview } from '../../components/CollectionPreview'
import SHOP_DATA from '../../constants/shop-data'

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA)
  return (
    <div className="shop-page">
      {
        collections.map(({ id, ...collectionProps}) => (
          <CollectionPreview
            key={id}
            {...collectionProps}
          />
        ))
      }
    </div>
  )
}

export default ShopPage
