import React from 'react';
import UpArraow from '../UpArraow2';
import UpArraow2 from '../UpArraow2';

const Footer = () => {
    return (
        <>
        <footer className="footer top-0   p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav> 
        <form>
          <header className="footer-title">Newsletter</header> 
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="btn bg-blue-700 hover:text-[#16273e] text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center p-4  bg-base-300 text-base-content font-semibold ">
      <aside>
        <p className=' '>Copyright © 2023 - All right reserved by <span className=''>Gadget World</span></p>
      </aside>
    </footer>
    {/* <UpArraow2 /> */}
    </>

    );
};

export default Footer;