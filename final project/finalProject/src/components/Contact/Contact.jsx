import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styleContact from './Contact.module.css';
import LoginFirstPopup from '../Popups/LoginFirstPopup';

export default function ContactUs() {
    const formRef = useRef(null);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const form = formRef.current;

        const phoneRegex = /^(01)\d{9}$/;
        const nameRegex = /^[A-Z]\w{2,}\s[A-Z]\w{2,}$/;
        const emailRegex = /^[A-Za-z]\w+@\w+\.\w+$/;

        const validateForm = (e) => {
            e.preventDefault();

            const phone = form.elements['phone'].value;
            const fullname = form.elements['name'].value;
            const email = form.elements['email'].value;

            let isValid = true;

            if (!nameRegex.test(fullname)) {
                alert('Please enter a valid full name');
                isValid = false;
            }

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email (e.g., example@mail.com)');
                isValid = false;
            }

            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid phone number (e.g., 01123456789)');
                isValid = false;
            }

            if (isValid) {
                if (!userId) {
                    setIsLoginPopupOpen(true);
                } else {
                    form.submit();
                }
            }
        };

        form.addEventListener('submit', validateForm);

        return () => {
            form.removeEventListener('submit', validateForm);
        };
    }, [userId]);

    const closeLoginPopup = () => {
        setIsLoginPopupOpen(false);
    };

    return (
        <div className={styleContact.contactContainer}>
            <div className={styleContact.contactInfo}>
                <h1>Contact Us</h1>
                <p>Facing any issues?</p>
                <p>We'd love to hear from you! Feel free to reach out through any of the following methods:</p>

                <div className={styleContact.contactMethods}>
                    <div className={styleContact.method}>
                        <FontAwesomeIcon icon={faPhone} className={styleContact.icon} />
                        <span>+201245874521</span>
                    </div>
                    <div className={styleContact.method}>
                        <a href="mailto:someone@example.com"><FontAwesomeIcon icon={faEnvelope} className={styleContact.icon} /></a>
                        <a href="mailto:someone@example.com" className={styleContact.goMail}><span>info@gmail.com</span></a>
                    </div>
                    <div className={styleContact.method}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={styleContact.icon} />
                        <span>Cairo, Egypt</span>
                    </div>
                </div>
            </div>

            <div className={styleContact.contactForm}>
                <h2>Send Us a Message</h2>
                <form ref={formRef} className={styleContact.formContainer}>
                    <input type="text" name="name" placeholder="Your Name " required />
                    <input type="email" name="email" placeholder="Your Email (e.g., example@mail.com)" required />
                    <input type="tel" name="phone" placeholder="Your Phone Number (e.g., 01123456789)" required />
                    <textarea name="message" placeholder="Your Message" required />
                    <button type="submit" className={styleContact.submitButton}>Send Message</button>
                </form>
            </div>

            {isLoginPopupOpen && <LoginFirstPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />}
        </div>
    );
}
