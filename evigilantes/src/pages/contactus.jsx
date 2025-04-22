import React from "react"
import Contactform from "../components/Contactform";
import { motion } from 'framer-motion';

function contactus() {
    return(
        <div data-w-id="cfa5bf27-b1c3-6298-15be-4b6b5b600434" class="page-wrapper">

            <div class="main-wrapper">
                <div class="bg-wrapper">
                    <div class="main-shape"></div>
                </div>
                {/* section title  */}
                <section class="subtitle-section">
                    <div class="gap-before-subtitle"></div>
                    <div class="subtitle-block">
                        <div class="w-layout-blockcontainer container-default w-container">
                            <div  class="subtitle-wrapper">
                                <div class="subtitle-text">Contact Us</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section title ends */}
                
                {/* contact section */}
                <section class="contact-section">
                    <div class="common-shape"></div>
                    <div class="section-gap">
                        <div class="w-layout-blockcontainer container-default w-container">
                            <div class="contact-block">
                                <div class="section-content-wrapper">
                                    
                                    <motion.div
                                        className="text-animation-wrapper"
                                        initial={{ width: '0%', filter: 'blur(5px)', opacity: 0 }}
                                        whileInView={{ width: '100%', filter: 'blur(0px)', opacity: 1 }}
                                        transition={{ duration: 1.2, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        >
                                        <div className="section-text-wrapper">
                                            <h3 className="section-title">Let's Connect and Collaborate</h3>
                                            <p className="section-except">We're here to help you innovate and succeed.</p>
                                        </div>
                                    </motion.div>

                                </div>
                                <div data-w-id="095e5cfa-55d9-4a81-dd6e-3346dbed541b" 
                                
                                    class="contact-wrapper">
                                    <div class="contact-card-wrapper">
                                        <div class="contact-card">
                                            <h4 class="contact-title">Contact Details</h4>
                                            <div class="w-layout-grid contact-info">
                                                <div id="w-node-_9123e7c7-afa6-8976-3bc4-4cd4e57b7860-0076b5b0"
                                                    class="contact-info-title">Phone:</div>
                                                <div id="w-node-_330fa7ef-90a1-b492-bf80-767ae6f18724-0076b5b0"
                                                    class="contact-info-text">+91 9823789495</div>
                                                <div id="w-node-_4b010fbb-ca26-8702-a4c7-77bb506f6e0f-0076b5b0"
                                                    class="contact-info-title">Email:</div>
                                                <div id="w-node-_1b2023b7-32ec-83f0-bcc8-17b48aea8c2b-0076b5b0"
                                                    class="contact-info-text">info@evigilantes.com</div>
                                                <div id="w-node-_5c7ae2d8-bd2d-b740-e820-ba12f2da65ec-0076b5b0"
                                                    class="contact-info-title">Address:</div>
                                                <div id="w-node-e5677fb5-dadb-da2c-f401-49e627f3bbde-0076b5b0"
                                                    class="contact-info-text">1st Floor, Pinnacle Pride, Near Durvankur Dining Hall, Above Maharashtra Electronics Showroom, Opposite Cosmos Bank, Sadashiv Peth, Pune-411030</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="contact-form-wrapper">
                                        <div class="aisaas-form-block w-form">
                                            <h4 class="contact-title">Get in Touch</h4>
                                            <form id="wf-form-Contact-Us" name="wf-form-Contact-Us" data-name="Contact Us"
                                                method="get" action={"#"} class="aisaas-form" data-wf-page-id="675ff6df544004030076b5b0"
                                                data-wf-element-id="100097ea-f706-c6e6-df1e-f08ce048a153"
                                                data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                                                >
                                                <div class="aisaas-field-wrapper">
                                                    <div class="aisaas-field-block"><label for="name"
                                                            class="aisaas-field-label">Name</label><input
                                                            class="aisaas-text-field w-input" maxlength="256" name="name"
                                                            data-name="Name" placeholder="" type="text" id="name"
                                                            required="" /></div>
                                                    <div class="aisaas-field-block"><label for="Email"
                                                            class="aisaas-field-label">Email</label><input
                                                            class="aisaas-text-field w-input" maxlength="256" name="Email"
                                                            data-name="Email" placeholder="" type="email" id="Email"
                                                            required="" /></div>
                                                </div>
                                                <div class="aisaas-field-block"><label for="Subject"
                                                        class="aisaas-field-label">Subject</label><input
                                                        class="aisaas-text-field w-input" maxlength="256" name="Subject"
                                                        data-name="Subject" placeholder="" type="text" id="Subject"
                                                        required="" /></div>
                                                <div class="aisaas-field-block"><label for="Message"
                                                        class="aisaas-field-label">Message</label><textarea id="Message"
                                                        name="Message" maxlength="5000" data-name="Message" placeholder=""
                                                        class="aisaas-text-field aisaas-text-area w-input"></textarea></div>
                                                <input type="submit" data-wait="Please wait..."
                                                    class="aisaas-button w-button" value="Submit" />
                                            </form>
                                            <div class="aisaas-success-message w-form-done">
                                                <div class="aisaas-message">Thank you! Your submission has been received!
                                                </div>
                                            </div>
                                            <div class="aisaas-error-message w-form-fail">
                                                <div class="aisaas-message">Oops! Something went wrong while submitting the
                                                    form.</div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div>
                                        <Contactform/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact section ends */}

            </div>

            <div class="cursor-movement">
                <div class="cusor-circle-1"></div>
                <div class="cusor-circle-2"></div>
                <div class="cusor-circle-3"></div>
            </div>
        </div>
    )
}

export default contactus