import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  
  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 40rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          height: 30px;
          width: 200px;
          font-size: 1.5rem;
          text-align:center;
          padding-bottom:2rem ;
          

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
  return (
    <Wrapper>
     <h2 className="common-heading">Contact Us</h2>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5674592417145!2d73.88120057455896!3d18.457938082623556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb1b37dfcadd%3A0x56b9d4b16085873c!2sVIIT%20COLLEGE!5e0!3m2!1sen!2sin!4v1700683278588!5m2!1sen!2sin" 
     width="100%" 
     height="450" 
     style={{ border:0 }} 
     allowFullScreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade"></iframe>

     <div className="container">
       <div className="contact-form">
         <form action="https://formspree.io/f/xyyqarnv"
               method="POST" className="contact-inputs">
           <input
           type="text"
           name="username"
           placeholder="username"
           autoComplete="off"
           required 
           />
             <input
           type="email"
           name="Email"
           placeholder="Eamil"
           autoComplete="off"
           required 
           />
          <textarea 
          name="message" 
          placeholder="Type Your Message Here"
          cols="30" 
          rows ="10"
          autoComplete="off"
          required>
          </textarea>

          <input type="submit" value="send" />

         </form>
       </div>

     </div>
    </Wrapper>
  )
}

export default Contact