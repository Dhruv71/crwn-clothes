import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collectionpreview/collectionpreview.component';
import {CollectionOverviewContainer} from './collection-overview.styles';
const CollectionOverview = ({collections}) => (
   <CollectionOverviewContainer>
    {collections.map(({id, ...otherCollectionsProps}) => 
    			<CollectionPreview key={id} {...otherCollectionsProps}/>)}
   </CollectionOverviewContainer>
	);

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);