import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import linkedin from './assets/linkedin.svg';
import telegram from './assets/telegram.svg';
import facebook from './assets/facebook.svg';
import dribbble from './assets/dribbble.svg';
import linkedinHover from './assets/linkedin-hover.svg';
import telegramHover from './assets/telegram-hover.svg';
import facebookHover from './assets/facebook-hover.svg';
import dribbbleHover from './assets/dribbble-hover.svg';
import './Footer.css';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Array of icon image URLs and corresponding links
  const icons = [
    { imgSrc: linkedin, hoverSrc: linkedinHover, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/olga-uvarova/' },
    { imgSrc: telegram, hoverSrc: telegramHover, alt: 'Telegram', link: 'https://t.me/olgauvva' },
    { imgSrc: facebook, hoverSrc: facebookHover, alt: 'Facebook', link: 'https://facebook.com/Olga.uvva' },
    { imgSrc: dribbble, hoverSrc: dribbbleHover, alt: 'Dribbble', link: 'https://dribbble.com/Olga_uvva' },
  ];

  return (
    <div className='footer'>
      <div className='footerContent'>
        <h4>Let's Connect</h4>
        <p className='footerText'>
          Please feel free to reach out to me for collaboration and friendly greetings.
        </p>
        <Link to="mailto: olga.uvva@gmail.com">
          olga.uvva@gmail.com
        </Link>
        <div className='iconContainer'>
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                src={hoveredIcon === index ? item.hoverSrc : item.imgSrc}
                alt={item.alt}
                className='footerSocial'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
