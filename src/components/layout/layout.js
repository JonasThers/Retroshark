import React from 'react';
import Header from './header';
import Footer from './footer';
import Popup from "./popup";

const LoadingPage = ({children}) =>
    <div>
        {children}
    </div>;

const MainLayout = ({children}) =>
    <div>
        <Header />
        {children}
        <Footer />
        <Popup />
    </div>;

export { LoadingPage, MainLayout };