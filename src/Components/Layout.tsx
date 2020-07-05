import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const Layout = ({ children, ...rest }: LayoutProps) => {
    return (
        <>
          <div id="page-content">
            <Header />   
            {children}
            <Footer />
          </div>
        </>	
      ); 
};

export default Layout;