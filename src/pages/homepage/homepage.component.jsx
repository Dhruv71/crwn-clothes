import React from 'react';
import {HomePageContainer} from './homepage.styles';
import Directory from '../../component/directory/directory.component';
const Homepage = () => (
   <div className='homepage'>
    <HomePageContainer>
    <Directory />
    </HomePageContainer>
   </div>
    );

export default Homepage;