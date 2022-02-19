//Styled Components
import {StyleDescription,StyledAbout,StyledImage,StyledHide} from "../styles"
 
const AboutSection = () => {
  return (
    <StyledAbout>
      <StyleDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have.We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyleDescription>
      <StyledImage>
        <img src="/images/home1.png" alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
