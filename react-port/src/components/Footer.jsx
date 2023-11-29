import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="flex justify-center">
            <ul className="flex justify-around m-5">
                <li className="footer-icon mx-5">
                    <a href="https://github.com/DanielTBonn" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
                </li>
                <li className="footer-icon mx-5">
                    <a href="https://www.linkedin.com/in/daniel-bonn-352166189" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
                </li>
                <li className="footer-icon mx-5">
                    <a href="mailto:danieltbonn@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2xl"/></a>
                </li>
            </ul>
        </footer>
    );
}