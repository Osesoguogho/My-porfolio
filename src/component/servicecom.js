import webIcon from '../assets/images/web-design.png';
import ApiIcon from '../assets/images/api-icon.png';
import pieIcon from '../assets/images/pie-icon.png';
import performanceIcon from '../assets/images/perfomance-phone.png';
import shoppingBag from '../assets/images/shopping-bag.png';


const serviceArray = [
    {
        id: 1,
        iconURL: webIcon,
        header: 'Custom Web Development' ,
        serviceRender: 'Creating responsive front-end interfaces with React, EJS and building scalable back-end applications using Node.js, with frameworks Express.js.'
    },
    {
        id: 2,
        iconURL: ApiIcon,
        header: 'API & Database Integratio' ,
        serviceRender: 'Connecting to third-party services with RESTful APIs and GraphQL, and managing databases like MySQL, MongoDB, and PostgreSQL for secure data handling.'
    },
    {
        id: 3,
        iconURL: pieIcon,
        header: 'Support & Maintenance' ,
        serviceRender: 'Regular updates, bug fixes, and troubleshooting to keep your site running smoothly and efficiently.'
    },
    {
        id: 4,
        iconURL: performanceIcon,
        header: 'Performance Optimization & Security' ,
        serviceRender: 'Boosting website speed, SEO, and implementing security measures to enhance user experience and protect against vulnerabilities.'
    },
    {
        id: 5,
        iconURL: shoppingBag,
        header: 'eCommerce Solutions' ,
        serviceRender: 'Setting up and customizing stores on Shopify, WooCommerce, and Magento with tailored features, payment gateways, and seamless integrations.'
    }
];

export default serviceArray;