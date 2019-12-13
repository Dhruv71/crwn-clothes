import React from 'react';
import {withRouter} from 'react-router-dom';
import './homepage.styles.scss';
import Directory from '../../component/directory/directory.component';
const Homepage = () => (
   <div className='homepage'>
    <Directory />
   </div>
    );

export default Homepage;