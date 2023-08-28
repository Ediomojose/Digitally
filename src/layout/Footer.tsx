import React from "react";
import Logo from "../components/ui/Logo";
import LinkedinLogo from "/src/assets/Images/akar-icons_linkedin-fill.png";
import TwitterLogo from "/src/assets/Images/akar-icons_twitter-fill.png";
import FacebookLogo from "/src/assets/Images/bxl_facebook.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-natural-dark-purple text-natural-light-grey px-6 py-12 flex flex-col">
        <div className="grid grid-cols-1 gap-2 justify-center md:grid-cols-5">
          <div className="flex flex-col gap-5">
            <Logo />
            <p>
              Digitally a brand that helps business achieve their goal by
              providing user-centric support that grows business.
            </p>
          </div>
          <ul className="">
            <li className="font-bold mb-3">About</li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>

          <ul>
            <li className="font-bold mb-3">Company</li>
            <li>
              <a href="">Our Team</a>
            </li>
            <li>
              <a href="">Partner With Us</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>

          <ul>
            <li className="font-bold mb-3">Support</li>
            <li>
              <a href="">Feedback</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Support Center</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
          </ul>
          <div>
            <p className="font-bold mb-3">Get in Touch</p>
            <p>Questions or Feedback we’d love to hear from you.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-8 item-center justify-between md:flex-row">
          <p>
            <span>&copy;</span> Copyrignt, Digitally 2022, All rights reserved
          </p>
          <ul className="flex  items-center gap-6 justify-center md:justify-start">
            <li>
              <a href="#">
                <img src={FacebookLogo} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={TwitterLogo} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={LinkedinLogo} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
