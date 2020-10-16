import React  from 'react';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
//import './collection-item.styles.scss';
import {CollectionItemContainer,ImageContainer,CollectionFooterContainer,NameContainer,PriceContainer,CustomButtonContainer} from './collection-item.styles';
const CollectionItem = ({ item, addItem }) =>{
    const { name, price, imageUrl} = item
	return(
    <CollectionItemContainer>
    <ImageContainer
         style={{backgroundImage:`url(${imageUrl})`}} />
    <CollectionFooterContainer>
    <NameContainer>{name}</NameContainer>
    <PriceContainer>${price}</PriceContainer>
    </CollectionFooterContainer>
    <CustomButtonContainer  onClick={() => addItem(item)} inverted={true}>
    ADD TO CART</CustomButtonContainer>
    </CollectionItemContainer>

	)
}
const mapDispatchToProps = dispatch => ({
	addItem : item => dispatch(addItem(item))
});


export default connect(null,mapDispatchToProps)(CollectionItem);