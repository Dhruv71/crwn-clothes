import React from 'react';
import CollcetionItem from '../collection-item/collection-item.component';
import './collectionpreview.styels.scss';

const CollectionPreview = ({title,items}) =>(
      <div className='collection-preview' >
       <h1 className='title' >{title.toUpperCase()}</h1>
       <div className='preview'>
       {items.filter((item,idx) => idx < 4 )
        .map(item =>( <CollcetionItem key={item.id} item={item} />)) }
      </div>
      </div>

	);

export default CollectionPreview;