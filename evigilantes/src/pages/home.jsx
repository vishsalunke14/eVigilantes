import React from "react"
import HeroSection from "../components/HeroSection";
import BenefitsScrollSection from "../components/BenefitsScrollSection";
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
// import Benefits from "../components/Benefits";

function home() {
    return (
        <div >
            <div data-w-id="33c90aa6-2fe6-ebfd-24b1-cd870a8e54b3" className="page-wrapper">

                {/* main content */}
                <div className="bg-wrapper">
                    <div className="home-shape-1"></div>
                    <div className="main-shape"></div>
                </div>
                {/* section 1 starts */}
                <section data-w-id="1a498262-4fc7-d1a7-ff37-4754c359d08f" className="home-hero-section">
                    <div className="section-gap">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="home-hero-block"><img src="./src/assets/images/home-20shape-202.svg" loading="lazy" alt=""
                                className="home-shape-2" />
                                <div className="home-hero-content-block">
                                    <div className="section-title-block">


                                        <div className="text-animation-wrapper">
                                            <h2 style={{ transform: 'none' }}
                                                className="section-title">
                                                Fortify Your Digital Ecosystem with Expert Security Solutions
                                            </h2>
                                        </div>



                                    </div>
                                    <div className="section-except-block">
                                        <div className="text-animation-wrapper">

                                            <p style={{ transform: 'none' }}
                                                className="section-except">
                                                Expert security solutions to protect your digital ecosystem, ensuring your business stays safe and resilient in a constantly evolving online world.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="section-button-block">
                                        <div className="text-animation-wrapper">
                                            <div style={{ transform: 'none' }}
                                                className="home-hero-button-wrapper"
                                            >
                                                <a
                                                    data-w-id="44e1ff05-e1ea-f631-3247-441e9847db01" href="/contactus"
                                                    className="primary-button w-inline-block">
                                                    <div className="button-wrapper">
                                                        <div className="button-text">Get Started</div>
                                                        <div className="button-hover"></div>
                                                    </div>
                                                    <div className="stroke-wrapper">
                                                        <div className="stroke"></div>
                                                    </div>
                                                </a><a data-w-id="235bf604-13eb-1138-b26e-76044066e416" href="/contactus"
                                                    className="secondary-button w-inline-block">
                                                    <div className="button-wrapper">
                                                        <div className="button-text">Contact Us</div>
                                                        <div className="button-hover"></div>
                                                    </div>
                                                    <div className="stroke-wrapper">
                                                        <div className="stroke"></div>
                                                    </div>
                                                </a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-hero-image-block">
                                    <div>
                                        <HeroSection/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section 1 end */}

                {/* section 2 starts */}
                <section className="home-features-section">
                <div className="section-gap">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="home-features-block">
                            <div className="features-content-block">
                                <div className="section-content-wrapper">
                                    <div className="section-subtitle-block">
                                        <motion.div
                                            initial={{
                                                y: '-150%',
                                                opacity: 0,
                                            }}
                                            animate={{
                                                y: '0%',
                                                opacity: 1,
                                            }}
                                            transition={{ duration: 1, ease: 'easeOut' }}
                                            className="section-subtitle"
                                            >
                                            Services
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial={{ width: '0%', filter: 'blur(5px)' }}
                                        whileInView={{ width: '100%', filter: 'blur(0px)' }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: true }}
                                        className="text-animation-wrapper"
                                        >
                                        <div className="section-text-wrapper features-text-wrapper">
                                            <h3 className="section-title">Unrivaled Security & Innovation</h3>
                                            <p className="section-except">
                                            We blend cutting-edge technology with robust security, offering innovative solutions that protect your digital assets and empower your business.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                                {/* button for mobile view */}
                                <div data-w-id="6b4569c3-af9f-b274-09cb-899d67734989" 
                                    className="preview-button-shape mobile">
                                    <div className="preview-button-wrapper"><a
                                            data-w-id="0b2e2273-9c58-241a-0343-e74d440f3d14" href="/features"
                                            className="preview-button w-inline-block">
                                            <div className="preview-border"></div><svg xmlns="http://www.w3.org/2000/svg"
                                                width="100%" viewBox="0 0 34 34" fill="none" className="preview-icon">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M6.6862 22.5073C6.295 21.8297 6.52715 20.9633 7.20473 20.5721L25.6078 9.94706C26.2854 9.55586 27.1518 9.78801 27.543 10.4656C27.9342 11.1432 27.702 12.0096 27.0244 12.4008L8.6214 23.0258C7.94382 23.417 7.0774 23.1848 6.6862 22.5073Z"
                                                    fill="currentColor"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M22.7897 24.2181C22.0343 24.014 21.5875 23.2363 21.7915 22.4809L24.5753 12.1771L14.2607 9.43707C13.5046 9.2362 13.0544 8.46036 13.2553 7.70418C13.4561 6.948 14.232 6.49784 14.9882 6.69871L26.6777 9.80395C27.0419 9.90068 27.3525 10.1385 27.5409 10.4648C27.7292 10.791 27.7799 11.1789 27.6816 11.5426L24.5268 23.2199C24.3227 23.9753 23.545 24.4221 22.7897 24.2181Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                        <div className="preview-button-text">Explore All Solutions</div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-features-wrapper-block">
                                <div className="home-features-card-wrapper one">
                                    <motion.a
                                        href="/features#Network Penetration Testing"
                                        initial={{ y: '60%', rotateZ: -30, opacity: 0 }}
                                        whileInView={{ y: 0, rotateZ: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        className="home-features-card w-inline-block"
                                        >
                                        <div className="home-features-card-block">
                                            <div className="home-features-card-item"><img
                                                    src="./src/assets/images/vapt-service.webp"
                                                    loading="lazy"
                                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 48vw, (max-width: 1279px) 291px, (max-width: 1439px) 396px, (max-width: 1919px) 406px, 542.5px"
                                                    alt="" className="home-features-card-image" />
                                                <h5  
                                                className="home-features-card-title">
                                                    Network Penetration Testing
                                                </h5>
                                                <div className="home-features-card-text">Strengthening your network by identifying and eliminating security gaps before attackers exploit them.</div>
                                            </div>
                                        </div>
                                        <div data-w-id="70c4327d-ffb4-a23e-2d8c-dd5fcf8e0013" 
                                            className="stroke-wrapper">
                                            <div className="stroke"></div>
                                        </div>
                                    </motion.a>

                                    <motion.a
                                        href="/features#Android Application Testing"
                                        initial={{ y: '60%', rotateZ: -30, opacity: 0 }}
                                        whileInView={{ y: 0, rotateZ: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        className="home-features-card w-inline-block"
                                        >

                                        <div className="home-features-card-block">
                                            <div className="home-features-card-item"><img
                                                    src="./src/assets/images/android.webp"
                                                    loading="lazy"
                                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 48vw, (max-width: 1279px) 291px, (max-width: 1439px) 396px, (max-width: 1919px) 406px, 542.5px"
                                                    alt="" className="home-features-card-image" />
                                                <h5 
                                                
                                                className="home-features-card-title">
                                                    
                                                    Android Application Testing
                                                </h5>
                                                <div className="home-features-card-text">We make sure your Android app is bulletproof, securing it from potential threats before they happen.</div>
                                            </div>
                                        </div>
                                        <div data-w-id="868b2bf8-061b-9f6e-328a-2e6d90ba49da" 
                                            className="stroke-wrapper">
                                            <div className="stroke"></div>
                                        </div>
                                    </motion.a>
                                </div>
                                <div className="home-features-card-wrapper two">
                                    <motion.a
                                        href="/features#Web Application Security Testing"
                                        initial={{ y: '60%', rotateZ: -30, opacity: 0 }}
                                        whileInView={{ y: 0, rotateZ: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        className="home-features-card w-inline-block"
                                        >
                                        
                                        <div className="home-features-card-block">
                                            <div className="home-features-card-item"><img
                                                    src="./src/assets/images/web-dev-service.webp"
                                                    loading="lazy"
                                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 48vw, (max-width: 1279px) 291px, (max-width: 1439px) 396px, (max-width: 1919px) 406px, 542.5px"
                                                    alt="" className="home-features-card-image" />
                                                <h5 
                                                className="home-features-card-title">
                                                    Web Application Security Testing</h5>
                                                <div className="home-features-card-text">Protecting your web applications from cyber threats before they become a risk.</div>
                                            </div>
                                        </div>
                                        <div data-w-id="9f6be6b7-e696-01d8-78ef-91f4f92476ef" 
                                            className="stroke-wrapper">
                                            <div className="stroke"></div>
                                        </div>
                                    </motion.a>

                                    <motion.a
                                        href="/features#Cloud Penetration Testing"
                                        initial={{ y: '60%', rotateZ: -30, opacity: 0 }}
                                        whileInView={{ y: 0, rotateZ: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        className="home-features-card w-inline-block"
                                        >

                                        <div className="home-features-card-block">
                                            <div className="home-features-card-item"><img
                                                    src="./src/assets/images/cloud.webp"
                                                    loading="lazy"
                                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 48vw, (max-width: 1279px) 291px, (max-width: 1439px) 396px, (max-width: 1919px) 406px, 542.5px"
                                                    alt="" className="home-features-card-image" />
                                                <h5 
                                                className="home-features-card-title">
                                                    Cloud Penetration Testing</h5>
                                                <div className="home-features-card-text">Securing your cloud environment by pinpointing and eliminating vulnerabilities before they impact your business.</div>
                                            </div>
                                        </div>
                                        <div data-w-id="9f6be6b7-e696-01d8-78ef-91f4f92476ff" 
                                            className="stroke-wrapper">
                                            <div className="stroke"></div>
                                        </div>
                                    </motion.a>
                                </div>
                                <div className="home-features-shape"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-w-id="32cdaaa0-f404-ac12-ff99-e97927f59d73" 
                    className="preview-button-shape desktop">
                    <div className="preview-button-wrapper"><a data-w-id="1bd751d9-cc3c-43a6-68d2-e9f982ae2566"
                            href="/features" className="preview-button-block w-inline-block">
                            <div className="preview-button">
                                <div className="preview-border"></div><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 34 34" fill="none" className="preview-icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.6862 22.5073C6.295 21.8297 6.52715 20.9633 7.20473 20.5721L25.6078 9.94706C26.2854 9.55586 27.1518 9.78801 27.543 10.4656C27.9342 11.1432 27.702 12.0096 27.0244 12.4008L8.6214 23.0258C7.94382 23.417 7.0774 23.1848 6.6862 22.5073Z"
                                        fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.7897 24.2181C22.0343 24.014 21.5875 23.2363 21.7915 22.4809L24.5753 12.1771L14.2607 9.43707C13.5046 9.2362 13.0544 8.46036 13.2553 7.70418C13.4561 6.948 14.232 6.49784 14.9882 6.69871L26.6777 9.80395C27.0419 9.90068 27.3525 10.1385 27.5409 10.4648C27.7292 10.791 27.7799 11.1789 27.6816 11.5426L24.5268 23.2199C24.3227 23.9753 23.545 24.4221 22.7897 24.2181Z"
                                        fill="currentColor"></path>
                                </svg>
                                </div>
                            <div className="preview-button-text">Explore All  Solutions</div>
                        </a>
                    </div>
                </div>
                </section>
                {/* section 2 ends */}

            {/* section 3 starts */}
            <div className="works-integrations-block">
                {/* section 3 content  */}

            {/* section 3 ends */}
                <div className="works-integrations-shape-1"></div>
                <div className="works-integrations-shape-2"></div>
            </div>



            {/* section 4 starts */}
            <div>
                <BenefitsScrollSection/>
            </div>
            {/* section 4 ends */}
            

            {/* section 5 starts */}
            <section className="testimonials-section">
                <div className="section-gap">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="testimonials-block">
                            <div className="section-content-wrapper center">
                                <div className="section-subtitle-block">
                                    <div data-w-id="a6c0428d-0939-fc12-da8c-7364dd36a3c8"
                                        className="section-subtitle center">Patrons</div>
                                </div>
                                <div data-w-id="a6c0428d-0939-fc12-da8c-7364dd36a3ca"
                                    className="text-animation-wrapper center">
                                    <div className="section-text-wrapper testimonial-text-wrapper">
                                        <h3 className="section-title center">Businesses That Rely on Us
                                        </h3>
                                        <p className="section-except center">Join us and Empower your businesses with top-tier security and web solutions that you can trust.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-delay="4000" data-animation="slide" className="testimonials-slider w-slider"
                                data-autoplay="false" data-easing="ease" data-hide-arrows="false"
                                data-disable-swipe="false" data-w-id="a6c0428d-0939-fc12-da8c-7364dd36a3d0"
                                data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                                <div className="testimonials-mask w-slider-mask">
                                    {/* 1 */}
                                    <div className="testimonials-slide w-slide">
                                        <div className="testimonials-card">
                                            <div className="testimonials-image-block">
                                                <img src="./src/assets/images/2.png"
                                                    loading="lazy" alt="" className="testimonials-image" />
                                            </div>
                                            <div className="testimonials-content-block">                                                
                                                <p className="testimonials-except">
                                                    We partnered with NSG Academy to provide web application and Android testing, ensuring a secure, high-performance platform for a seamless online learning experience.
                                                </p>
                                                <div className="testimonials-author-block">
                                                    <h6 className="testimonials-name">NSG Academy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                    <div className="testimonials-slide w-slide">
                                        <div className="testimonials-card">
                                            <div className="testimonials-image-block">
                                                <img src="./src/assets/images/1.png"
                                                    loading="lazy" alt="" className="testimonials-image" /></div>
                                            <div className="testimonials-content-block">
                                                <p className="testimonials-except">
                                                    We partnered with an emerging gym supplement brand to conduct web application testing, ensuring a secure, high-performing e-commerce platform for fitness enthusiasts.
                                                </p>
                                                <div className="testimonials-author-block">
                                                    <h6 className="testimonials-name">Howl Store</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 3 */}
                                    {/* <div className="testimonials-slide w-slide">
                                        <div className="testimonials-card">
                                            <div className="testimonials-image-block">
                                                <img src=" "
                                                    loading="lazy" alt="" className="testimonials-image" />
                                            </div>
                                            <div className="testimonials-content-block">                                                
                                                <p className="testimonials-except">
                                                    description
                                                </p>
                                                <div className="testimonials-author-block">
                                                    <h6 className="testimonials-name">name</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* 4 */}
                                    {/* <div className="testimonials-slide w-slide">
                                        <div className="testimonials-card">
                                            <div className="testimonials-image-block">
                                                <img src=" "
                                                    loading="lazy" alt="" className="testimonials-image" />
                                            </div>
                                            <div className="testimonials-content-block">                                                
                                                <p className="testimonials-except">
                                                    description
                                                </p>
                                                <div className="testimonials-author-block">
                                                    <h6 className="testimonials-name">name</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    
                                    
                                </div>
                                <div className="testimonials-arrow arrow-left w-slider-arrow-left">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                                        className="testimonials-arrow-icon">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M20.25 12.2744C20.25 12.8267 19.8023 13.2744 19.25 13.2744L4.25 13.2744C3.69772 13.2744 3.25 12.8267 3.25 12.2744C3.25 11.7221 3.69772 11.2744 4.25 11.2744L19.25 11.2744C19.8023 11.2744 20.25 11.7221 20.25 12.2744Z"
                                            fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0084 5.54411C11.3981 5.93545 11.3968 6.56861 11.0054 6.95833L5.66701 12.2747L11.0054 17.5901C11.3968 17.9798 11.3981 18.613 11.0084 19.0043C10.6188 19.3957 9.98559 19.3971 9.59422 19.0074L3.54422 12.9834C3.35576 12.7957 3.24981 12.5407 3.2498 12.2748C3.24979 12.0088 3.35572 11.7539 3.54416 11.5662L9.59416 5.54119C9.9855 5.15147 10.6187 5.15278 11.0084 5.54411Z"
                                            fill="currentColor"></path>
                                    </svg></div>
                                <div className="testimonials-arrow arrow-right w-slider-arrow-right">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                                        className="testimonials-arrow-icon">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3.75 11.7256C3.75 11.1733 4.19772 10.7256 4.75 10.7256H19.75C20.3023 10.7256 20.75 11.1733 20.75 11.7256C20.75 12.2779 20.3023 12.7256 19.75 12.7256L4.75 12.7256C4.19772 12.7256 3.75 12.2779 3.75 11.7256Z"
                                            fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12.9916 18.4559C12.6019 18.0646 12.6032 17.4314 12.9946 17.0417L18.333 11.7253L12.9946 6.40987C12.6032 6.02019 12.6019 5.38703 12.9916 4.99566C13.3812 4.6043 14.0144 4.60293 14.4058 4.99262L20.4558 11.0166C20.6442 11.2043 20.7502 11.4593 20.7502 11.7252C20.7502 11.9912 20.6443 12.2461 20.4558 12.4338L14.4058 18.4588C14.0145 18.8485 13.3813 18.8472 12.9916 18.4559Z"
                                            fill="currentColor"></path>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                </div><img src="./src/assets/images/testimonials-20shape.svg" loading="lazy" alt="" className="testimonial-shape" />
            </section>

            {/* section 5 ends */}

            
            {/* section 6 starts */}
            <section className="cta-section">
                {/* <div className="section-gap-a"> */}
                <div className="section-gap">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div data-w-id="717256c2-115e-6b2a-64d6-70997107099e" className="cta-block">
                            <div className="cta-content-block">
                                <div className="section-title-block">
                                    <div className="section-except-block">
                                        <div className="text-animation-wrapper-seclast">
                                            <h3 className="section-except">Want To Know More?</h3>
                                        </div>
                                    </div>
                                    <div className="text-animation-wrapper-seclast">
                                        <h2 className="section-title special-color">Building the Future, Securing the Present Starts Here</h2>
                                    </div>
                                </div>
                                <div className="section-button-block">
                                    <div className="text-animation-wrapper-seclast">
                                        <div className="cta-button-wrapper">

                                            <a data-w-id="235bf604-13eb-1138-b26e-76044066e416" href="contact-us.html"
                                                className="secondary-button w-inline-block">
                                                <div className="button-wrapper">
                                                    <div className="button-text">Let's Talk</div>
                                                    <div className="button-hover"></div>
                                                </div>
                                                <div className="stroke-wrapper">
                                                    <div className="stroke"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>                                                         
                                <div className="section-except-block just-gap">
                                    <div className="text-animation-wrapper-seclast">
                                        <p className="section-except">Your Trusted Partner for Secure Solutions. Let's Elevate Your Bussiness - Schedule A call Today.</p>
                                    </div>
                                </div>                              
                            </div>
                            <div className="cta-image-block"><img src="images/cta-20image.webp" loading="lazy"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, 100vw"
                                    srcset="images/cta-20image-p-500.webp 500w, images/cta-20image-p-800.webp 800w, images/cta-20image-p-1080.webp 1080w, images/cta-20image.webp 1363w"
                                    alt="" className="cta-image" /></div>
                            <div className="cta-shape"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 6 ends */}

            <div className="cursor-movement">
                <div className="cusor-circle-1"></div>
                <div className="cusor-circle-2"></div>
                <div className="cusor-circle-3"></div>
            </div>


            </div></div>
    )
}

export default home