import React from 'react';
import CollectionPreview from '../../component/collectionpreview/collectionpreview.component';
import  SHOP_DATA     from './shop_data.js';

class ShopPage extends React.Component {
    constructor(props){
     super(props);

     this.state = {

     	collections: SHOP_DATA     
     };
    }

    render() {
    	const {collections} = this.state;
    	return (
    		<div>
    			{collections.map(({id, ...otherCollectionsProps}) => 
    			<CollectionPreview key={id} {...otherCollectionsProps}/>)}
    		</div>
    	);
    }

}

export default ShopPage;