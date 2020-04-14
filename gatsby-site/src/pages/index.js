import React from 'react';

import Home from '../components/homePage';
import Product from '../components/productPage';
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <Home />
        <Product />
    </Layout>
);

export default IndexPage;
