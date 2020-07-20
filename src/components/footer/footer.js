import React from 'react';
import './footer.css';


const Footer = () => {
    return (
<footer>
  <div class="rounded-social-buttons">
                    <a class="social-button facebook" href="https://www.facebook.com/abhay.anand.792/"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/hashtag_abhay/"><i class="fab fa-instagram"></i></a>
                    <a class="social-button twitter" href="https://twitter.com/AbhayAnand0809"><i class="fab fa-twitter"></i></a>
                    <a class="social-button github" href="https://github.com/Abhay2611/"><i class="fab fa-github"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/in/abhay-anand1108/"><i class="fab fa-linkedin"></i></a>
                </div>
  <div className="footer-copyright text-center py-3">© 2020 | Made by
    <a href="https://abhay-web-folio.netlify.app/index.html/" id="lining" className="text-light"> Abhay Anand</a>
  </div>
</footer>
    )
}

export default Footer;
