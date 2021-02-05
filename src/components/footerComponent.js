import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const FooterPagePro = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h2 className="display-7 typing-main heading">
              Get in touch?
            </h2>
            <p>
              Do check out our social media handles for latest updates
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Social Media
            </h5>
            <ul className="list-unstyled">
              <li>
                    <p>
                      <a href="https://www.instagram.com/microsoft.innovations.vitc/?hl=en" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="mr-1" />
                        <strong>Instagram</strong>
                        
                    </a>
                    </p>           
                
              </li>
              <li>
                    <p>
                      <a href="https://www.linkedin.com/company/microsoft-innovations-club-vitc/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
                        <strong>Linkedin</strong>
                      </a>
                    </p>
              </li>
              <li>
                    <p>
                      <a href="#!">
                        <FontAwesomeIcon icon={faYoutube} className="mr-1" />
                        <strong>Youtube</strong>
                      </a>
                    </p>
              </li>
              <li>
                    <p>
                      <a href="https://twitter.com/microsoftvitc">
                        <FontAwesomeIcon icon={faTwitter} className="mr-1" />
                        <strong>Twitter</strong>
                      </a>
                    </p>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              NAVIGATION
            </h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <a href="#about"><strong>About</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#spotlight"><strong>Spotlight</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#events"><strong>Events</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="https://github.com/Microsoft-Innovations-Club-VIT-Chennai/" target="_blank"><strong>Github</strong></a>
                </p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Feel free to connect with us!</h5>
          </li>
          
          <li className="list-inline-item">
            <a target = "_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=microsoftinnovationclubvitc@gmail.com" className="btn btn-danger btn-rounded">
              Email
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fas fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fas fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fas fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fas fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fas fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Made with &hearts; by MIC Core Team &copy; 2020.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;