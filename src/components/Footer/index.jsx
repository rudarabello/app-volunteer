import Github from '../../assets/1.png';
import Linkedin from '../../assets/2.png';
import Twitter from '../../assets/3.png';
import { Contact, Container, CopyRights } from './styles';

export const Footer = () => {
    return (
        <Container>
            <Contact>
                <a aria-label="Github" href="https://github.com/rudarabello" rel="noopener noreferrer">
                    <img alt="Github" src={Github} width={50} />
                </a>
                <a aria-label="Linkedin" href="https://www.linkedin.com/in/ruda-rabello-da-silva/" rel="noopener noreferrer">
                    <img alt="Linkedin" src={Linkedin} width={42} />
                </a>
                <a aria-label="Twitter" href="https://twitter.com/rudarabello" rel="noopener noreferrer">
                    <img alt="Twitter" src={Twitter} width={42} />
                </a>
            </Contact>
            <CopyRights>
                <span>Develop by © Rudá Rabello. All Rights Reserved.</span>
            </CopyRights>
        </Container>
    );
};
