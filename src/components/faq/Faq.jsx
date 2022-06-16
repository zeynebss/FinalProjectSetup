import React from "react";
import "./faq.scss";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import { MdNavigateNext } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import faqBanner from "../../assets/faqBanner.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <section className="faq">
      <Breadcrumb
        spacing="8px"
        className="breadCrmb"
        separator={<MdNavigateNext color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <i>
              <FaHome />
            </i>{" "}
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink className="active" href="/faq">
            Faq
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="container">
        <div className="faq-area">
          <div className="faq-text-header text-center">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="faq-banner">
         
            <figure><img src={faqBanner} alt="" /></figure>
          </div>
          <div className="row faq-accordion">
            <div className="txt-area col-lg-3">
                <h1>Orders & Shipping</h1>
            </div>
            <div className="col-lg-9">
              <Accordion allowMultiple>
                <div className="accordion-top">
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> How did my package ship?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus color="black" fontSize="12px" />
                          ) : (
                            <AiOutlinePlus color="black" fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                </div>
                

           <div className="accordion-top">
           <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5>Why does my USPS tracking number state 1-Day, 2-Day, 3-Day Delivery?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus color="black" fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
           </div>
              <div className="accordion-top">
              <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> How long will my package take to arrive?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </div>
               <div className="accordion-top">
               <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> What are business days?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
               </div>
            <div className="accordion-top">
            <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> How do I know my package has shipped?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
            </div>
             <div className="accordion-top">
             <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> Why are certain products unavailable to ship to Internationally?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
             </div>
              <div className="accordion-top">
              <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> Why is my tracking number not updating?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </div>
              </Accordion>
            </div>
          </div>

          {/* 2 */}
          <div className="row faq-accordion">
            <div className="txt-area col-lg-3">
                <h1>Returns & Exchanges</h1>
            </div>
            <div className="col-lg-9">
              <Accordion allowMultiple>
                <div className="accordion-top">
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> How did my package ship?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus color="black" fontSize="12px" />
                          ) : (
                            <AiOutlinePlus color="black" fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                </div>
                 <div className="accordion-top">
           <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5>Why does my USPS tracking number state 1-Day, 2-Day, 3-Day Delivery?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus color="black" fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                  </div>
              <div className="accordion-top">
              <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> How long will my package take to arrive?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </div>
          
           
              </Accordion>
            </div>
          </div>

          {/* 3 */}
          <div className="row faq-accordion">
            <div className="txt-area col-lg-3">
                <h1>Discounts</h1>
            </div>
            <div className="col-lg-9">
              <Accordion allowMultiple>
                <div className="accordion-top">
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5> How do I know my package has shipped?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus color="black" fontSize="12px" />
                          ) : (
                            <AiOutlinePlus color="black" fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                </div>
                 <div className="accordion-top">
           <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5>Why are certain products unavailable to ship to Internationally?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus color="black" fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                  </div>
              <div className="accordion-top">
              <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton className="box">
                          <Box flex="1" textAlign="left">
                         
                            <h5>Why is my tracking number not updating?</h5>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinus fontSize="12px" />
                          ) : (
                            <AiOutlinePlus fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                  <p>  Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with
                     a pristine matte finish for soft, velvety smooth skin.</p>  
                    <p>Say hello to flawless, long-lasting foundation that comes in 7 
                        melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, 
                        natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </div>
          
           
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
