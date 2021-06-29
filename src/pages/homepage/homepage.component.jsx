import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className="homepage">
        <Directory/>
        <div className='footer'>Copyright © 2021, revut limited.</div>
    </div>
);

export default HomePage;