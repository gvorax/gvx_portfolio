import React from 'react';
import { BsTelegram, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://t.me/gvorax">
          <BsTelegram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/otabek.ulashov.7/">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/gvoraxdev/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
