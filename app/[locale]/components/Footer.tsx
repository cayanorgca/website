import { FC } from "react";
import Image from "next/image";
import { GrInstagram } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLinkedin } from 'react-icons/si';
import { useTranslations } from "next-intl";

const Footer: FC = () => {

    const t = useTranslations('footer');

    return (
        <div className="footer-container">

            <Image 
                src="/images/logo.png" 
                alt="Arabian House logo" 
                width="45"
                height="45"
                className="footer-logo"
            />

            <div className="footer-wrapper">
                <div>
                    <div className="contact-wrapper">
                        <p className="text-left">{t('contact')}:</p>
                        <a href="mailto:info@cayanorg.ca" className="link">
                            info@cayanorg.ca
                        </a>
                    </div>

                    <p className="text-left">{t('rightsReserved')}</p>
                </div>

                <div className="social-media-container">
                    <p className="text-left">{t('follow')}:</p>
                    <div>
                        <a 
                        href="https://www.instagram.com/cayanorg?igsh=MTFwdG51dnhqdTV0Zg==" 
                        target="_blank"
                        className="social-media-icon instagram">
                            <GrInstagram />
                        </a>
                        <a 
                        href="https://x.com/CayanOrg?t=xBPFk86tG3Jjvbp2OzDKhg&s=09" 
                        target="_blank"
                        className="social-media-icon facebook">
                            <FaXTwitter />
                        </a>
                        <a 
                        href="https://www.linkedin.com/company/cayanorg/" 
                        target="_blank"
                        className="social-media-icon tiktok">
                            <SiLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;