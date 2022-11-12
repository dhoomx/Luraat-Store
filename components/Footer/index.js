import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Countact Us</FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">About us</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Luraat</SocialLogo>
            <WebsiteRights>
              Luraat © {new Date().getFullYear()}
              &nbsp; All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com"
                target="_blank"
                aria-label="FaceBook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instgram">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Pinterest">
                <FaPinterest />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

// import React from "react";
// import "./styles.scss";
// const Footer = (props) => {
//   return (
//     <footer className="footer">
//       <div className="wrap">
//         © Luraat 2021
//         <br /> <br />
//         Instrgram{" "}
//       </div>
//     </footer>
//   );
// };

// export default Footer;
