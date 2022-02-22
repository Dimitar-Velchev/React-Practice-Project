//Styled Components
import {StyleDescription,StyledAbout,StyledImage,StyledHide} from "../styles"
import Wave from "./Wave";
//Animation motion
import {motion} from "framer-motion"
import { titleAnimation,fade,photoAnimation } from "../animation";
 
const AboutSection = () => {
  return (
    <StyledAbout>
      <StyleDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyleDescription>
      <StyledImage>
        <motion.img variants={photoAnimation} src="/images/home1.png" alt="guy with a camera" />
      </StyledImage>
      <Wave/>
    </StyledAbout>
  );
};

export default AboutSection;
