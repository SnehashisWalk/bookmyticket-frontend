import "./footer.css";
import CopyrightIcon from "@material-ui/icons/Copyright";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <section className="footer">
      <h4 className="footer-title">
        <HomeIcon style={{ margin: "0 5px" }} />{" "}
        <strong>List your Show | </strong> Got a show, event activity or a great
        experience? Partner with us & get listed on BookMyTicket.
      </h4>
      <ul className="footer-help">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Current Openings</li>
        <li>Terms & Conditions</li>
        <li>Sitemap</li>
      </ul>
      <div className="footer-logo">
        <h3 className="footer-logo-info">
          Copyright 2021 <CopyrightIcon style={{ margin: "0 3px" }} />{" "}
          <i>BookMyTicket</i>
        </h3>
      </div>
      <h4 style={{ color: "white", letterSpacing: "2px" }}>Reach us out on</h4>
      <ul className="footer-help">
        <li>
          <FacebookIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <YouTubeIcon />
        </li>
        <li>
          <PinterestIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
      </ul>
    </section>
  );
}
