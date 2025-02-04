import React from 'react';

import Home from '../components/homeScreen';
import Product from '../components/productScreen';
import Layout from '../components/layout';
import Theme from '../components/theme';
import Feature from '../components/featureScreen';
import Download from '../components/downloadScreen';
import Github from '../components/githubScreen';
import Support from '../components/supportScreen';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../components/seo';
import GlobalStyle from '../utils/responsive';

const IndexPage = () => (
    <Layout>
        <GlobalStyle />
        <SEO title="Home" />
        <Theme>
            <Nav />
            <Home />
            <Product />
            <Feature />
            <Download />
            <Github />
            <Support />
            <Footer />
        </Theme>
    </Layout>
);

export default IndexPage;
