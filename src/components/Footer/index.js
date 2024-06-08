import './Footer.css';
import SocialMedia from '../SocialMedia';
import ProjectLogo from '../ProjectLogo';
import Signature from '../Signature'; 

const Footer = () => {
  return(
    <section className='footer'> 
    <SocialMedia />
    <ProjectLogo />
    <Signature />
    </section>

  );
};

export default Footer;
