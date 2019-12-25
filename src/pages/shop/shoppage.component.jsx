import React from 'react';
import CollectionOverview from '../../component/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match}) => (
     <div>
     <Route exact path={`${match.path}`} component={CollectionOverview} />
     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />   	
     </div>
    );

export default ShopPage;