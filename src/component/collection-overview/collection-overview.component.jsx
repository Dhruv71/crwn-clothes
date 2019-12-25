import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selectors';
import './collection-overview.styles.scss';
import CollectionPreview from '../collectionpreview/collectionpreview.component';

const CollectionOverview = ({collections}) => (
   <div className='collection-overview'>
    {collections.map(({id, ...otherCollectionsProps}) => 
    			<CollectionPreview key={id} {...otherCollectionsProps}/>)}
   </div>
	);

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);