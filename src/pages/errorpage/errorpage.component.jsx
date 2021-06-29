import React from 'react';
import './errorpage.styles.scss'

const ErrorPage = () => {
    return (
        <div className="error">
            <h1 className="text-error">404</h1>
            <span className="detail">Page not found</span>
        </div>
    );
};

export default ErrorPage;