import React from "react"
import { motion } from 'framer-motion';

function features() {
    return(
        <div data-w-id="17632abf-21ed-8e90-4221-e19366a708e0" class="page-wrapper">
        

        {/* main content */}
        <div class="main-wrapper">
            <div class="bg-wrapper">
                <div class="main-shape"></div>
            </div>
            {/* title section "services" */}
            <section class="subtitle-section">
                <div class="gap-before-subtitle"></div>
                <div class="subtitle-block">
                    <div class="w-layout-blockcontainer container-default w-container">
                        <div  class="subtitle-wrapper">
                            <div class="subtitle-text">Services</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end title section "services" */}

            {/* section 1 */}

            <section class="features-section">
                <div class="section-gap">
                    <div class="w-layout-blockcontainer container-default w-container">
                        <div class="features-block">
                            <div class="section-content-wrapper center">
                                <motion.div
                                    className="text-animation-wrapper center"
                                    initial={{ width: '0%', filter: 'blur(5px)' }}
                                    whileInView={{ width: '100%', filter: 'blur(0px)' }}
                                    transition={{ duration: 1.5, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    >
                                    <div class="section-text-wrapper integrations-text-wrapper">
                                        <h3 class="section-title center">Unrivaled Security & Innovation
                                        </h3>
                                    </div>
                                </motion.div>
                            </div>
                            <div data-w-id="cb0ac012-0fbb-898d-035c-ddb105a9dfa5" class="features-wrapper">
                                <section id="vapt" data-w-id="3551b420-ffca-a694-641d-3b28dec0e9e2"
                                    class="features-card one">
                                    <div class="features-card-block">
                                        <div class="features-card-wrapper">
                                            <div class="features-card-content-block">
                                                <h5 class="features-card-title">Network Penetration Testing</h5>
                                                <div class="features-card-description w-richtext">
                                                    <p>We simulate real-world cyberattacks to identify and exploit vulnerabilities within your network infrastructure. By assessing firewalls, routers, and internal systems, we uncover weaknesses that could be targeted by attackers. This proactive approach allows us to strengthen your network defenses.</p>
                                                    <ul role="list">
                                                        <li>Enhances defenses by addressing critical vulnerabilities before they are targeted</li>
                                                        <li>Reduces the likelihood of data breaches, downtime, and financial losses.</li>
                                                        <li>Helps meet security standards and regulations, ensuring compliance</li>
                                                        <li>Strengthens overall network resilience, ensuring smoother operations without security interruptions.</li>
                                                    </ul>
                                                </div><a data-w-id="44e1ff05-e1ea-f631-3247-441e9847db01"
                                                    href="/contactus" class="primary-button w-inline-block">
                                                    <div class="button-wrapper">
                                                        <div class="button-text">Get Started</div>
                                                        <div class="button-hover"></div>
                                                    </div>
                                                    <div class="stroke-wrapper">
                                                        <div class="stroke"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="features-card-image-block"><img
                                                    src="./src/assets/images/vapt-service-square.webp"
                                                    loading="lazy" sizes="(max-width: 479px) 86vw, 358px"
                                                    alt="" class="features-card-image" /></div>
                                        </div>
                                    </div>
                                    <div data-w-id="299d56c1-f31f-3b88-b985-cd5f0ea72707" 
                                        class="stroke-wrapper card-stroke-wrapper">
                                        <div class="stroke"></div>
                                    </div>
                                </section>
                                <section id="web-development" data-w-id="dd9331d4-0b7a-c9df-ed07-cb0525f8b68e"
                                    class="features-card two">
                                    <div class="features-card-block">
                                        <div class="features-card-wrapper">
                                            <div class="features-card-content-block">
                                                <h5 class="features-card-title">Web Application Security Testing</h5>
                                                <div class="features-card-description w-richtext">
                                                    <p>We simulate real-world attacks, we identify weaknesses in your code, authentication processes, and data handling, helping you fix vulnerabilities before they are exploited. We ensure that your web applications are secure, compliant with industry standards, and resilient against evolving cyber risks.</p>
                                                    <ul role="list">
                                                        <li>Identifying security flaws before hackers can exploit them..</li>
                                                        <li>Strengthens web applications by addressing weaknesses in code, authentication, and data handling.</li>
                                                        <li>Helps ensure compliance with industry standards and regulations like GDPR, PCI-DSS, and OWASP.</li>
                                                        <li>Protects sensitive user data from potential breaches, safeguarding your reputation.</li>
                                                    </ul>
                                                </div><a data-w-id="44e1ff05-e1ea-f631-3247-441e9847db01"
                                                    href="/contactus" class="primary-button w-inline-block">
                                                    <div class="button-wrapper">
                                                        <div class="button-text">Get Started</div>
                                                        <div class="button-hover"></div>
                                                    </div>
                                                    <div class="stroke-wrapper">
                                                        <div class="stroke"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="features-card-image-block"><img
                                                    src="./src/assets/images/web-dev-service-square.webp" loading="lazy"
                                                    sizes="(max-width: 479px) 86vw, 358px"
                                                    alt="" class="features-card-image" /></div>
                                        </div>
                                    </div>
                                    <div data-w-id="dd9331d4-0b7a-c9df-ed07-cb0525f8b6ca" 
                                        class="stroke-wrapper card-stroke-wrapper">
                                        <div class="stroke"></div>
                                    </div>
                                </section>
                                <section id="operations-automation" data-w-id="5b1b4bf6-2f7b-728d-3c7d-f36b4b88bf00"
                                    class="features-card three">
                                    <div class="features-card-block">
                                        <div class="features-card-wrapper">
                                            <div class="features-card-content-block">
                                                <h5 class="features-card-title">Android Application Testing</h5>
                                                <div class="features-card-description w-richtext">
                                                    <p>Our Android Application Testing service focuses on identifying and fixing vulnerabilities in your Android apps to ensure they are secure, reliable, and user-friendly. We test for performance, functionality, compatibility, and security risks, helping you deliver a smooth, bug-free, and secure experience to your users.</p>
                                                    <ul role="list">
                                                        <li>Ensures smooth functionality and performance for a seamless user experience.</li>
                                                        <li>Detects and eliminates bugs or crashes, ensuring reliability and stability.</li>
                                                        <li>Tests the app across various devices and screen sizes, ensuring consistent performance.</li>
                                                        <li>Ensures your app meets industry standards and compliance requirements, boosting trust and credibility.</li>
                                                    </ul>
                                                </div><a data-w-id="44e1ff05-e1ea-f631-3247-441e9847db01"
                                                    href="/contactus" class="primary-button w-inline-block">
                                                    <div class="button-wrapper">
                                                        <div class="button-text">Get Started</div>
                                                        <div class="button-hover"></div>
                                                    </div>
                                                    <div class="stroke-wrapper">
                                                        <div class="stroke"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="features-card-image-block"><img
                                                    src="./src/assets/images/android-square.webp"
                                                    loading="lazy" sizes="(max-width: 479px) 86vw, 358px"
                                                    alt="" class="features-card-image" /></div>
                                        </div>
                                    </div>
                                    <div data-w-id="5b1b4bf6-2f7b-728d-3c7d-f36b4b88bf3c" 
                                        class="stroke-wrapper card-stroke-wrapper">
                                        <div class="stroke"></div>
                                    </div>
                                </section>
                                <section id="operations-automation" data-w-id="5b1b4bf6-2f7b-728d-3c7d-f36b4b88bf00"
                                    class="features-card three">
                                    <div class="features-card-block">
                                        <div class="features-card-wrapper">
                                            <div class="features-card-content-block">
                                                <h5 class="features-card-title">Cloud Penetration Testing</h5>
                                                <div class="features-card-description w-richtext">
                                                    <p>Our Cloud Penetration Testing service assess misconfigurations, access controls, and potential data exposure to ensure your cloud infrastructure remains secure. By proactively testing for weaknesses, we help businesses strengthen their cloud security, maintain compliance, and prevent unauthorized access or data breaches.</p>
                                                    <ul role="list">
                                                        <li>Strengthens cloud security to protect sensitive business and customer data.</li>
                                                        <li>Helps meet industry regulations like GDPR, HIPAA, and ISO 27001.</li>
                                                        <li>Provides actionable insights to fortify cloud infrastructure against cyber threats.</li>
                                                        <li>Minimizes the risk of financial loss, downtime, and reputational damage from cyber incidents.</li>
                                                    </ul>
                                                </div><a data-w-id="44e1ff05-e1ea-f631-3247-441e9847db01"
                                                    href="/contactus" class="primary-button w-inline-block">
                                                    <div class="button-wrapper">
                                                        <div class="button-text">Get Started</div>
                                                        <div class="button-hover"></div>
                                                    </div>
                                                    <div class="stroke-wrapper">
                                                        <div class="stroke"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="features-card-image-block"><img
                                                    src="./src/assets/images/cloud-square.webp"
                                                    loading="lazy" sizes="(max-width: 479px) 86vw, 358px"
                                                    alt="" class="features-card-image" /></div>
                                        </div>
                                    </div>
                                    <div data-w-id="5b1b4bf6-2f7b-728d-3c7d-f36b4b88bf3c" 
                                        class="stroke-wrapper card-stroke-wrapper">
                                        <div class="stroke"></div>
                                    </div>
                                </section>
                                <section id="operations-automation" data-w-id="5b1b4bf6-2f7b-728d-3c7d-f36b4b88bf00"
                                    class="features-card three">
                                    <div class="features-card-block">
                                        <div class="features-card-wrapper">
                                            <div class="features-card-content-block">
                                                <h5 class="features-card-title">Source Code Review (SCR)</h5>
                                                <div class="features-card-description w-richtext">
                                                    <p>Our Source Code Review service thoroughly examines your application’s code and ensure your code is secure, efficient, and adheres to best practices, reducing the risk of exploitation. By reviewing the source code early in the development process, we help optimize your application for better security, performance, and maintainability.</p>
                                                    <ul role="list">
                                                        <li>Ensures adherence to best coding practices, improving overall code maintainability and readability.</li>
                                                        <li>Finds and fixes issues early in the development process, reducing costly fixes later.</li>
                                                        <li>Identifies performance bottlenecks and suggests improvements for faster, more efficient applications.</li>
                                                        <li>Ensures your code meets security standards and regulatory requirements, mitigating compliance risks.</li>
                                                    </ul>
                                                </div><a data-w-id="44e1ff05-e1ea-f631-3247-441e9847db01"
                                                    href="/contactus" class="primary-button w-inline-block">
                                                    <div class="button-wrapper">
                                                        <div class="button-text">Get Started</div>
                                                        <div class="button-hover"></div>
                                                    </div>
                                                    <div class="stroke-wrapper">
                                                        <div class="stroke"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="features-card-image-block"><img
                                                    src="./src/assets/images/src-code-square.webp"
                                                    loading="lazy" sizes="(max-width: 479px) 86vw, 358px"
                                                    alt="" class="features-card-image" /></div>
                                        </div>
                                    </div>
                                    <div data-w-id="5b1b4bf6-2f7b-728d-3c7d-f36b4b88bf3c" 
                                        class="stroke-wrapper card-stroke-wrapper">
                                        <div class="stroke"></div>
                                    </div>
                                </section>
                                <section id="operations-automation" data-w-id="5b1b4bf6-2f7b-728d-3c7d-f36b4b88bf00"
                                    class="features-card three">
                                    <div class="features-card-block">
                                        <div class="features-card-wrapper">
                                            <div class="features-card-content-block">
                                                <h5 class="features-card-title">Configuration Audit</h5>
                                                <div class="features-card-description w-richtext">
                                                    <p>Our Configuration Audit service thoroughly examines system settings, security policies, and infrastructure configurations to identify misconfigurations and security gaps. By assessing compliance with industry best practices and standards, we help businesses strengthen their security posture, reduce risks, and prevent unauthorized access or data breaches.</p>
                                                    <ul role="list">
                                                        <li>Ensures proper configurations to strengthen overall security posture.</li>
                                                        <li>Helps meet industry standards and regulatory requirements like GDPR, ISO 27001, and NIST.</li>
                                                        <li>Reduces the risk of breaches by eliminating weak or default configurations.</li>
                                                        <li>Ensures systems run efficiently by identifying and correcting improper settings.</li>
                                                    </ul>
                                                </div><a data-w-id="44e1ff05-e1ea-f631-3247-441e9847db01"
                                                    href="/contactus" class="primary-button w-inline-block">
                                                    <div class="button-wrapper">
                                                        <div class="button-text">Get Started</div>
                                                        <div class="button-hover"></div>
                                                    </div>
                                                    <div class="stroke-wrapper">
                                                        <div class="stroke"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="features-card-image-block"><img
                                                    src="./src/assets/images/config-square.webp"
                                                    loading="lazy" sizes="(max-width: 479px) 86vw, 358px"
                                                    alt="" class="features-card-image" /></div>
                                        </div>
                                    </div>
                                    <div data-w-id="5b1b4bf6-2f7b-728d-3c7d-f36b4b88bf3c" 
                                        class="stroke-wrapper card-stroke-wrapper">
                                        <div class="stroke"></div>
                                    </div>
                                </section>
                                
                            </div>
                            <div class="features-shape"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 1 ends */}
            
            {/* section 2 faq */}
            <section class="faqs-section">
                <div class="section-gap">
                    <div class="w-layout-blockcontainer container-default w-container">
                        <div class="faqs-block">
                            <div class="faqs-title-block">
                                <div data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cbf" class="text-animation-wrapper">
                                    <div class="section-text-wrapper faqs-text-wrapper">
                                        <h3 class="section-title">Frequently Asked Questions</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="faqs-content-block">
                                <div data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cc9" class="faqs-wrapper">
                                    <div data-delay="0" data-hover="false"
                                        data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cca"
                                        class="faqs-question-wrapper initially w-dropdown">
                                        <div class="faqs-question-block initially w-dropdown-toggle">
                                            <div class="faqs-question-text initially">How long does a typical security assessment take?<br /></div>
                                            <div class="faqs-icon-wrapper initially"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"
                                                    fill="none" class="faqs-icon initially">
                                                    <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg></div>
                                        </div>
                                        <nav class="faqs-answer-block initially w-dropdown-list">
                                            <p class="faqs-answer-text initially">The duration varies depending on the complexity of your systems, but most assessments take between one to four weeks for a thorough evaluation.
                                            </p>
                                        </nav>
                                    </div>
                                </div>
                                <div data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cd7" class="faqs-wrapper">
                                    <div data-delay="0" data-hover="false"
                                        data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cd8"
                                        class="faqs-question-wrapper w-dropdown">
                                        <div class="faqs-question-block w-dropdown-toggle">
                                            <div class="faqs-question-text">What if my business already uses a security tool-do I still need testing?<br />
                                            </div>
                                            <div class="faqs-icon-wrapper"><svg xmlns="http://www.w3.org/2000/svg"
                                                    width="100%" viewBox="0 0 24 24" fill="none" class="faqs-icon">
                                                    <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg></div>
                                        </div>
                                        <nav class="faqs-answer-block w-dropdown-list">
                                            <p class="faqs-answer-text">Yes, automated security tools have limitations. Human-led penetration testing identifies complex vulnerabilities that automated scanners may miss.</p>
                                        </nav>
                                    </div>
                                </div>
                                <div data-w-id="29585e12-5f62-2d92-a954-873b8f2a5ce5" class="faqs-wrapper">
                                    <div data-delay="0" data-hover="false"
                                        data-w-id="29585e12-5f62-2d92-a954-873b8f2a5ce6"
                                        class="faqs-question-wrapper w-dropdown">
                                        <div class="faqs-question-block w-dropdown-toggle">
                                            <div class="faqs-question-text">How often should I conduct a security test?<br /></div>
                                            <div class="faqs-icon-wrapper"><svg xmlns="http://www.w3.org/2000/svg"
                                                    width="100%" viewBox="0 0 24 24" fill="none" class="faqs-icon">
                                                    <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg></div>
                                        </div>
                                        <nav class="faqs-answer-block w-dropdown-list">
                                            <p class="faqs-answer-text">Regular security testing is recommended at least annually or after major updates to your applications, networks, or infrastructure.</p>
                                        </nav>
                                    </div>
                                </div>
                                <div data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cf3" class="faqs-wrapper">
                                    <div data-delay="0" data-hover="false"
                                        data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cf4"
                                        class="faqs-question-wrapper w-dropdown">
                                        <div class="faqs-question-block w-dropdown-toggle">
                                            <div class="faqs-question-text">Do your services help with regulatory compliance?<br /></div>
                                            <div class="faqs-icon-wrapper"><svg xmlns="http://www.w3.org/2000/svg"
                                                    width="100%" viewBox="0 0 24 24" fill="none" class="faqs-icon">
                                                    <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg></div>
                                        </div>
                                        <nav class="faqs-answer-block w-dropdown-list">
                                            <p class="faqs-answer-text">Yes, we ensure your security measures align with industry standards such as GDPR, PCI-DSS, ISO 27001, HIPAA, and NIST.</p>
                                        </nav>
                                    </div>
                                </div>
                                <div data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cf3" class="faqs-wrapper">
                                    <div data-delay="0" data-hover="false"
                                        data-w-id="29585e12-5f62-2d92-a954-873b8f2a5cf4"
                                        class="faqs-question-wrapper w-dropdown">
                                        <div class="faqs-question-block w-dropdown-toggle">
                                            <div class="faqs-question-text">What if a vulnerability is found?<br /></div>
                                            <div class="faqs-icon-wrapper"><svg xmlns="http://www.w3.org/2000/svg"
                                                    width="100%" viewBox="0 0 24 24" fill="none" class="faqs-icon">
                                                    <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg></div>
                                        </div>
                                        <nav class="faqs-answer-block w-dropdown-list">
                                            <p class="faqs-answer-text">We provide a detailed remediation plan to fix vulnerabilities and improve your security posture.</p>
                                        </nav>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div data-w-id="29585e12-5f62-2d92-a954-873b8f2a5d2b" class="faqs-preview-button-shape desktop">
                    <div class="faqs-shape"></div>
                    <div class="preview-button-wrapper"><a data-w-id="1bd751d9-cc3c-43a6-68d2-e9f982ae2566"
                            href="/contactus" class="preview-button-block w-inline-block">
                            <div class="preview-button">
                                <div class="preview-border"></div><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                    viewBox="0 0 34 34" fill="none" class="preview-icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.6862 22.5073C6.295 21.8297 6.52715 20.9633 7.20473 20.5721L25.6078 9.94706C26.2854 9.55586 27.1518 9.78801 27.543 10.4656C27.9342 11.1432 27.702 12.0096 27.0244 12.4008L8.6214 23.0258C7.94382 23.417 7.0774 23.1848 6.6862 22.5073Z"
                                        fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M22.7897 24.2181C22.0343 24.014 21.5875 23.2363 21.7915 22.4809L24.5753 12.1771L14.2607 9.43707C13.5046 9.2362 13.0544 8.46036 13.2553 7.70418C13.4561 6.948 14.232 6.49784 14.9882 6.69871L26.6777 9.80395C27.0419 9.90068 27.3525 10.1385 27.5409 10.4648C27.7292 10.791 27.7799 11.1789 27.6816 11.5426L24.5268 23.2199C24.3227 23.9753 23.545 24.4221 22.7897 24.2181Z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                            <div class="preview-button-text">Contact Support</div>
                        </a></div>
                </div>
            </section>
            {/* section 2 faq ends  */}
        </div>
        {/* main content ends*/}


        <div class="cursor-movement">
            <div class="cusor-circle-1"></div>
            <div class="cusor-circle-2"></div>
            <div class="cusor-circle-3"></div>
        </div>
    </div>
    )
}

export default features