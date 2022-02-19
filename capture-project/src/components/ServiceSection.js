//import  SyleComponent
import styled from "styled-components";
import { StyleDescription, StyledAbout, StyledImage } from "../styles";

const ServiceSection = () => {
  return (
    <StyledServices>
      <StyleDescription>
        <h2>
          High <span>quality</span> services.
        </h2>
        <StyleCards>
          <StyleCard>
            <div className="icon">
              <img src="/images/clock.svg" alt="svg" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src="/images/teamwork.svg" alt="svg" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src="/images/diaphragm.svg" alt="svg" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src="/images/money.svg" alt="svg" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
        </StyleCards>
      </StyleDescription>
      <StyledImage>
        <img src="/images/home2.png" alt="camera" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyleCard = styled.div`
  flex-basis: 20rem;
  .icon{
    display:flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;
