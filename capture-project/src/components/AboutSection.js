//Styled
import styled from "styled-components";

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

//Styled Components
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const StyleDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
overflow: hidden;
`
export default AboutSection;
