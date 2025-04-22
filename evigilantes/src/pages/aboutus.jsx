import React from "react"
import { motion } from 'framer-motion';

function aboutus() {
    return(
        <div data-w-id="f0399587-8dd2-a052-cb49-e9a0c1ddf000" class="page-wrapper">


        {/*  main content */}
        <div class="main-wrapper">
            <div class="bg-wrapper">
                <div class="main-shape"></div>
            </div>

            {/* section aboutus title */}
            <section class="subtitle-section">
                <div class="gap-before-subtitle"></div>
                <div class="subtitle-block">
                    <div class="w-layout-blockcontainer container-default w-container">
                        <div  class="subtitle-wrapper">
                            <div class="subtitle-text">About Us</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section aboutus title ends */}

            {/* section aboutus */}
            <section class="about-hero-section">
                <div class="section-gap">
                    <div class="w-layout-blockcontainer container-default w-container">
                        <div class="about-hero-block">
                            <div class="about-hero-content-block">
                                <motion.div
                                    className="text-animation-wrapper"
                                    initial={{ width: '0%', filter: 'blur(5px)' }}
                                    whileInView={{ width: '100%', filter: 'blur(0px)' }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    >
                                    <div className="section-text-wrapper about-hero-text-wrapper">
                                        <h3 className="section-title about-hero-title">
                                        Your Trusted Partner in Digital Security & Innovation
                                        </h3>
                                        <p className="section-except">
                                        At eVigilantes, We safeguard your digital assets with cutting-edge security solutions while enhancing innovation to keep your business ahead in the ever-evolving cyber landscape.
                                        </p>
                                    </div>
                                </motion.div>
                                <div class="about-hero-image-block">
                                    <div class="home-shape-1"></div><img class="about-hero-image"
                                        src="./src/assets/images/revolutionizing-20businesses-20with-20ai-powered-20saas-20solutions.webp"
                                        alt="" 
                                        sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 960px, (max-width: 1439px) 1170px, (max-width: 1919px) 1290px, 1720px"
                                        data-w-id="c680e7e2-6196-e5eb-a5d0-9ea4690bd5a3" loading="lazy"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section aboutus end */}


            <section class="who-section">
                <div class="section-gap">
                    <div class="w-layout-blockcontainer container-default w-container">
                        <div class="who-block">
                            <div class="who-conten-block">
                                <motion.div
                                    className="text-animation-wrapper center"
                                    initial={{ width: '0%', filter: 'blur(5px)' }}
                                    whileInView={{ width: '100%', filter: 'blur(0px)' }}
                                    transition={{ duration: 1.2, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    >
                                    <div className="section-text-wrapper who-text-wrapper">
                                        <h3 className="section-title center">Who We Are</h3>
                                        <p className="section-except center">
                                        At eVigilantes, we don’t just secure your business - we empower it. In a world where cyber threats evolve daily, we stay ahead to protect what matters most - your data, reputation, and digital assets. From web and network security to mobile app and cloud testing, we deliver tailored solutions that keep your business resilient. With our expertise, you get more than just security - you get peace of mind, innovation, and a competitive edge.
                                        </p>
                                        <p className="section-except center">
                                        With us, you don’t just get security - you get the confidence to grow without fear.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <div data-w-id="804654f5-3e82-3f90-f481-00e10fdd2b5a" class="who-wrapper-block">
                                <div class="why-block desktop">
                                    <h4 class="who-title">Why Choose Us?</h4>
                                    <p class="who-except">At eVigilantes, we combine your creativity with security.</p>
                                    <ul role="list" class="who-ul">
                                        <li class="who-ul-item">Advanced Security Expertise</li>
                                        <li class="who-ul-item">Tailored Solutions</li>
                                        <li class="who-ul-item">Cutting-Edge Technology</li>
                                        <li class="who-ul-item">Comprehensive Protection</li>
                                    </ul>
                                </div>
                                <motion.div
                                    id="w-node-_942528b0-71cb-4f03-c22d-7a289127d2f8-8ed6f370"
                                    className="who-image-block"
                                    initial={{ rotateY: 67.5, transformStyle: 'preserve-3d' }}
                                    whileInView={{ rotateY: 0 }}
                                    transition={{ duration: 1.2, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    >
                                    <motion.img
                                        src="./src/assets/images/who-20we-20are.webp"
                                        loading="lazy"
                                        sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 48vw, (max-width: 1439px) 350px, (max-width: 1919px) 450px, 534px"
                                        alt=""
                                        className="who-image"
                                        style={{ transformStyle: 'preserve-3d' }}
                                    />
                                </motion.div>
                                <div id="w-node-a1ccc4fa-9c9e-e62c-58a9-43d551ee463d-8ed6f370" class="why-block mobile">
                                    <h4 class="who-title">Why Choose Us?</h4>
                                    <p class="who-except">At eVigilantes, we combine your creativity with security.</p>
                                    <ul role="list" class="who-ul">
                                        <li class="who-ul-item">Advanced Security Expertise</li>
                                        <li class="who-ul-item">Tailored Solutions</li>
                                        <li class="who-ul-item">Cutting-Edge Technology</li>
                                        <li class="who-ul-item">Comprehensive Protection</li>
                                    </ul>
                                </div>
                                <div 
                                    class="what-block">
                                    <h4 class="who-title">What We Do</h4>
                                    <p class="who-except">Our suite of services is built to address modern digital challenges. By blending cutting-edge security with innovative web solutions, we empower businesses to:</p>
                                    <ul role="list" class="who-ul">
                                        <li class="who-ul-item">Cybersecurity & Penetration Testing:<br /><span
                                                class="who-ul-item-span">Identifying and eliminating vulnerabilities in web, network, mobile, and cloud environments.</span></li>
                                        <li class="who-ul-item">Security Audits & Compliance: <br /><span
                                                class="who-ul-item-span">Simulating real-world attacks to uncover vulnerabilities in web apps, networks, mobile apps, and cloud environments.</span></li>
                                        <li class="who-ul-item">Source Code & Configuration Review: <br /><span
                                                class="who-ul-item-span">Detecting hidden security flaws in application code and system settings.</span></li>
                                        <li class="who-ul-item">Continuous Protection & Risk Mitigation:<br /><span
                                                class="who-ul-item-span">Providing expert guidance to keep your business secure and resilient.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="testimonials-section">
                <div class="section-gap">
                    <div class="w-layout-blockcontainer container-default w-container">
                        <div class="testimonials-block">
                            <div class="section-content-wrapper center">
                                <div class="section-subtitle-block">
                                    <div data-w-id="a6c0428d-0939-fc12-da8c-7364dd36a3c8"
                                        class="section-subtitle center">Patrons</div>
                                </div>
                                <div data-w-id="a6c0428d-0939-fc12-da8c-7364dd36a3ca"
                                    class="text-animation-wrapper center">
                                    <div class="section-text-wrapper testimonial-text-wrapper">
                                        <h3 class="section-title center">Businesses That Rely on Us
                                        </h3>
                                        <p class="section-except center">Join us and Empower your businesses with top-tier security and web solutions that you can trust.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-delay="4000" data-animation="slide" class="testimonials-slider w-slider"
                                data-autoplay="false" data-easing="ease" data-hide-arrows="false"
                                data-disable-swipe="false" data-w-id="a6c0428d-0939-fc12-da8c-7364dd36a3d0"
                                data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                                <div class="testimonials-mask w-slider-mask">
                                    <div class="testimonials-slide w-slide">
                                        <div class="testimonials-card">
                                            <div class="testimonials-image-block">
                                                <img src="./src/assets/images/2.png"
                                                    loading="lazy" alt="" class="testimonials-image" /></div>
                                            <div class="testimonials-content-block">
                                                <p class="testimonials-except">We partnered with NSG Academy to provide web application and Android testing, ensuring a secure, high-performance platform for a seamless online learning experience.</p>
                                                <div class="testimonials-author-block">
                                                    <h6 class="testimonials-name">NSG Academy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonials-slide w-slide">
                                        <div class="testimonials-card">
                                            <div class="testimonials-image-block">
                                                <img src="./src/assets/images/1.png"
                                                    loading="lazy" alt="" class="testimonials-image" /></div>
                                            <div class="testimonials-content-block">
                                                <p class="testimonials-except">
                                                    We partnered with an emerging gym supplement brand to conduct web application testing, ensuring a secure, high-performing e-commerce platform for fitness enthusiasts.
                                                </p>
                                                <div class="testimonials-author-block">
                                                    <h6 class="testimonials-name">Howl Store</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="testimonials-arrow arrow-left w-slider-arrow-left"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                                        class="testimonials-arrow-icon">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M20.25 12.2744C20.25 12.8267 19.8023 13.2744 19.25 13.2744L4.25 13.2744C3.69772 13.2744 3.25 12.8267 3.25 12.2744C3.25 11.7221 3.69772 11.2744 4.25 11.2744L19.25 11.2744C19.8023 11.2744 20.25 11.7221 20.25 12.2744Z"
                                            fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0084 5.54411C11.3981 5.93545 11.3968 6.56861 11.0054 6.95833L5.66701 12.2747L11.0054 17.5901C11.3968 17.9798 11.3981 18.613 11.0084 19.0043C10.6188 19.3957 9.98559 19.3971 9.59422 19.0074L3.54422 12.9834C3.35576 12.7957 3.24981 12.5407 3.2498 12.2748C3.24979 12.0088 3.35572 11.7539 3.54416 11.5662L9.59416 5.54119C9.9855 5.15147 10.6187 5.15278 11.0084 5.54411Z"
                                            fill="currentColor"></path>
                                    </svg></div>
                                <div class="testimonials-arrow arrow-right w-slider-arrow-right"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                                        class="testimonials-arrow-icon">
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
                </div><img src="./src/assets/images/testimonials-20shape.svg" loading="lazy" alt="" class="testimonial-shape" />
            </section>


        </div>
        {/* main content ends */}


        <div class="cursor-movement">
            <div class="cusor-circle-1"></div>
            <div class="cusor-circle-2"></div>
            <div class="cusor-circle-3"></div>
        </div>
    </div>
    )
}

export default aboutus