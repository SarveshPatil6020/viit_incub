import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaInstagram,FaEnvelope, FaFacebook, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Register Your StartUp Now</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>VIITsiic</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Feel Free To Contact Us</h3>
            <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a>
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <FaEnvelope className="icons" />
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} VIITsiic. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
   
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 70vw;
    margin: auto;
    padding: 5rem 10rem;
    padding-bottom: 7rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    height:30px;
     h3{
       font-size:1.3rem;
     }
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }


  footer {
    padding: 10rem 0 2rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size:1.5rem; 
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size:1.3rem;
    }
   
    .footer-social--icons {
      display: flex;
      gap: 1rem;

      div {
        padding: .8rem;
        border-radius: 40%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.5rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 5rem;

      
      p{
        font-size:1rem;
      }

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;
export default Footer;