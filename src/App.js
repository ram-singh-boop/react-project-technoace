import React from 'react'
import './App.css';
import {Switch, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from  './Header';
import Footer from './Footer';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import Navbar from './Component/Navbar';
import Requestqote from './Component/Requestqote';
import Mobileappportfolio from './Component/Mobileappportfolio';

import Websites from './Component/Websites';
import Mobileapps from './Component/Mobileapps';
import Allportfolios from './Component/Allportfolios';
import Clienttestimonials from './Component/Clienttestimonials';
import Methodology from './Component/Methodology';
import ISOCertifiedDesignAgency from './Component/ISOCertifiedDesignAgency';
import Aflateswithus from './Component/Aflateswithus';
import Workwithus from './Component/Workwithus';
import Allservices from './Component/Allservices';
import Webapplications from './Component/Webapplications';
import PrivacyPolicy from './Component/PrivacyPolicy';
import TermsCondition from './Component/TermsCondition';
import ScrollIndicator from './ScrollIndicator';
import ITconsultation from './Component/ITconsultation';
import Errornotfound from './Component/Errornotfound';
import Sharerequirement from './Component/Sharerequirement';
import Python from './Component/Python';
import Meanstack from './Component/Meanstack';
import Mernstack from './Component/Mernstack';
import Wordpress from './Component/Wordpress';
import Magento from './Component/Magento';
import Seo from './Component/Seo';
import Smo from './Component/Smo';
import Linkbuilding from './Component/Linkbuilding';
import Email from './Component/Email';
import Php from './Component/Php';
import Ppc from './Component/Ppc';
import Localseo from './Component/Localseo';
import Technicalseo from './Component/Technicalseo';
import Digitalmarketingconsultingagency from './Component/Digitalmarketingconsultingagency';
import Testimonials from './Component/Testimonials';
import ScrollToTop from './ScrollToTop';
import Websiteaudit from './Component/Websiteaudit';
import Emailmarketing from './Component/Emailmarketing';
import Securityaudit from './Component/Securityaudit';
import Allmarketingservices from './Component/Allmarketingservices';
import Ecommerce from './Component/Ecommerce';
import Erp from './Component/Erp';
import Crm from './Component/Crm';
import Reactpage from './Component/Reactpage';
import Ionichybridapp from './Component/Ionichybridapp';
import Websiteportfolio from './Component/Websiteportfolio';
import Ecoomerceportofolio from './Component/Ecoomerceportofolio';


function App() {
  return (
    <>

<Header />

<Navbar />
<ScrollIndicator />
<ScrollToTop />
<Switch>
<Route exact path="/"  component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/contact" component={Contact} />
<Route exact path="/services" component={Services} />
<Route exact path="/requestqote" component={Requestqote} />
<Route exact path="/Mobileappportfolio" component={Mobileappportfolio} />

<Route exact path="/Websites" component={Websites} />
<Route exact path="/Mobileapps" component={Mobileapps} />
<Route exact path="/Allportfolios" component={Allportfolios} />
<Route exact path="/Clienttestimonials" component={Clienttestimonials} />
<Route exact path="/Methodology" component={Methodology} />
<Route exact path="/ISOCertifiedDesignAgency" component={ISOCertifiedDesignAgency} />
<Route exact path="/Aflateswithus" component={Aflateswithus} />
<Route exact path="/Workwithus" component={Workwithus} />
<Route exact path="/Allservices" component={Allservices} />
<Route exact path="/Webapplications" component={Webapplications} />
<Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
<Route exact path="/TermsCondition" component={TermsCondition} />
<Route exact path="/ITconsultation" component={ITconsultation} />
<Route exact path="/Sharerequirement" component={Sharerequirement} />
<Route exact path="/Python" component={Python} />
<Route exact path="/Meanstack" component={Meanstack} />
<Route exact path="/Mernstack" component={Mernstack} />
<Route exact path="/Php" component={Php} />
<Route exact path="/Wordpress" component={Wordpress} />
<Route exact path="/Magento" component={Magento} />
<Route exact path="/Seo" component={Seo} />
<Route exact path="/Smo" component={Smo} />
<Route exact path="/Linkbuilding" component={Linkbuilding} />
<Route exact path="/Ppc" component={Ppc} />
<Route exact path="/Email" component={Email} />
<Route exact path="/Localseo" component={Localseo} />
<Route exact path="/Technicalseo" component={Technicalseo} />
<Route exact path="/Digitalmarketingconsultingagency" component={Digitalmarketingconsultingagency} />
<Route exact path="/Testimonials" component={Testimonials} />
<Route exact path="/Websiteaudit" component={Websiteaudit} />
<Route exact path="/Emailmarketing" component={Emailmarketing} />
<Route exact path="/Securityaudit" component={Securityaudit} />
<Route exact path="/Allmarketingservices" component={Allmarketingservices} />
<Route exact path="/Ecommerce" component={Ecommerce} />
<Route exact path="/Crm" component={Crm} />
<Route exact path="/Erp" component={Erp} />
<Route exact path="/Reactpage" component={Reactpage} />
<Route exact path="/Ionichybridapp" component={Ionichybridapp} />
<Route exact path="/Websiteportfolio" component={Websiteportfolio} />
<Route exact path="/Ecoomerceportofolio" component={Ecoomerceportofolio} />

<Route component={Errornotfound} />


</Switch>  
<Footer />

    </>
  );
}

export default App;
