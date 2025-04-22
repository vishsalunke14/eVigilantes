import '../assets/css/webflow-style.css';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const benefitsData = [
  {
    id: 'one',
    title: 'Protects Your Business',
    description: 'Preventing cyber attacks before they disrupt your operations.',
    image: './src/assets/images/benefit-2.webp',
  },
  {
    id: 'two',
    title: 'Builds Trust',
    description: 'Establishing a trusted and secure environment for your customers.',
    image: './src/assets/images/benefit-1.webp',
  },
  {
    id: 'three',
    title: 'Ensures Compliance',
    description: 'Keeping you compliant and secure in an evolving regulatory landscape.',
    image: './src/assets/images/benefit-3.webp',
  },
  {
    id: 'four',
    title: 'Enhances Resilience',
    description: 'Building robust defenses that grow with your business.',
    image: './src/assets/images/benefit-5.webp',
  },
  {
    id: 'five',
    title: 'Cost-Effective Security',
    description: 'Saving you money by preventing costly breaches and disruptions.',
    image: './src/assets/images/benefit-4.webp',
  },
];

export default function BenefitsScrollSection() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [clickIndex, setClickIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldAnimate(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!shouldAnimate || !containerRef.current || !isLargeScreen) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = containerRef.current.offsetHeight - window.innerHeight;

      if (totalScrollableHeight <= 0) return;

      const scrolled = window.innerHeight - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollableHeight, 0), 1);

      const index = Math.min(
        benefitsData.length - 1,
        Math.floor(progress * benefitsData.length - 1)
      );

      setScrollIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldAnimate, isLargeScreen]);

  const activeIndex = isLargeScreen ? scrollIndex : clickIndex;

  return (
    <>
      {/* Embedded CSS for active tab styling */}
      <style>{`
        .active-tab {
          color: #9fef00;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        @media screen and (max-width: 1439px) {
          .section-subtitle.center {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            width: 100%;
          }
        }
      `}</style>

      <div ref={containerRef} style={{ height: isLargeScreen ? '500vh' : 'auto', position: 'relative' }}>
        <section
          className="benefits-section"
          ref={sectionRef}
          style={{
            position: isLargeScreen ? 'sticky' : 'relative',
            top: 0,
            height: isLargeScreen ? '100vh' : 'auto',
            overflow: 'hidden',
          }}
        >
          <div className="section-gap-benefit">
            <div className="w-layout-blockcontainer container-default w-container">
              <div className="benefits-block">
                <div className="section-content-wrapper">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="section-subtitle center"
                  >
                    Benefits of our Services
                  </motion.div>

                  <motion.div
                    initial={{ width: '0%', filter: 'blur(5px)' }}
                    whileInView={{ width: '100%', filter: 'blur(0px)' }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-animation-wrapper center"
                  >
                    <div className="section-text-wrapper benifits-text-wrapper">
                      <h3 className="section-title benefits-title">Why Our Service Matters To Your Business</h3>
                      <p className="section-except benefits-except">With eVigilantes, your digital ecosystem is safe in expert hands. We protect your business from cyber threats, ensuring a secure and resilient online presence</p>
                    </div>
                  </motion.div>
                </div>

                <div className="benefits-tabs-block">
                  <div className={`benefits-tabs ${isLargeScreen ? '_1440px' : '_1280px'}`}>
                    <div className="benefits-tabs-menu">
                      {benefitsData.map((item, index) => (
                        <div
                          key={item.id}
                          className={`benefits-tab-link ${item.id}`}
                          onClick={() => !isLargeScreen && setClickIndex(index)}
                          style={{ cursor: !isLargeScreen ? 'pointer' : 'default' }}
                        >
                          <div className="benefits-tab-block">
                            <div className={`benefits-tab-text ${index === activeIndex ? 'active-tab' : ''}`}>
                              {item.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="benefits-tabs-content">
                      {benefitsData.map((item, index) => (
                        <motion.div
                          key={item.id}
                          className={`benefits-tab-pane ${item.id}`}
                          initial={false}
                          animate={{
                            opacity: index === activeIndex ? 1 : 0,
                            visibility: index === activeIndex ? 'visible' : 'hidden',
                          }}
                          transition={{ duration: 0.5 }}
                          style={{
                            position: index === activeIndex ? 'relative' : 'absolute',
                          }}
                        >
                          <div className="benefits-tabs-image-block">
                            <img
                              src={item.image}
                              alt={item.title}
                              className={`benefits-tabs-image ${item.id}`}
                            />
                            <div className={`benefits-tabs-card ${item.id}`}>
                              <div className="benefits-tabs-text">{item.description}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
