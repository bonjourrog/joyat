import './Socials.css';
import { SocialProps } from './Socials.props';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Socials: React.FC<SocialProps> = ({customClass})=>{
    return <section className={`socials ${customClass}`}>
            <a target='_blank' href="https://www.facebook.com/profile.php?id=61559165487740"><FaFacebookSquare size={20}/></a>
            <a target='_blank' href="https://www.instagram.com/joyatinmobiliaria/"><RiInstagramFill size={22}/></a>
    </section>
}