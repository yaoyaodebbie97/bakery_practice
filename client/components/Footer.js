import React from 'react';

export const Footer = () => {
  return (
    <footer className='text-center py-2 px-3 absolute-bottom mw-100'>
      <div>
        <h3>Have a question?</h3>
        <p>
          We&apos;re always here to lend a helping hand. Consumer Care Team
          hours are Monday-Friday, 9am - 5pm EST
        </p>
        <p>
          Email us at{' '}
          <a className='contact-info' href='email:hello@taurusbakery.com'>
            hello@taurusbakery.com
          </a>
        </p>
        <p>
          Call us at{' '}
          <a className='contact-info' href='tel:1855-TBAKERY'>
            855-TBAKERY
          </a>
        </p>
        <p>Established in 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
