import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "../svg/FacebookIcon";
import TwitterIcon from "../svg/TwitterIcon";
import InstagramIcon from "../svg/InstagramIcon";
import FooterMenu from "./FooterMenu";
import LogoWhiteIcon from "../svg/LogoWhiteIcon";
import contactFooterMenuItems from "../../mockData/contactFooterMenuItems.json"
import informationFooterMenuItems from "../../mockData/informationFooterMenuItems.json"
import helpFooterMenuItems from "../../mockData/helpFooterMenuItems.json"

function Footer() {
    return (
        <div className="absolute inset-x-0 bottom-0 h-16">
            <div className={styles.footer + " py-10 "}>
                <div className="container grid grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-12">
                    <div className="col-span-2 desktop:col-span-3">
                        <LogoWhiteIcon />
                    </div>

                    <FooterMenu title="Контакты" items={contactFooterMenuItems} className="col-span-2" />
                    <FooterMenu title="Информация" items={informationFooterMenuItems} className="col-span-2 hidden tablet:block" />
                    <FooterMenu title="Помощь" items={helpFooterMenuItems} className="col-span-2 hidden tablet:block" />
                    <div className="col-span-3 hidden tablet:flex space-x-7">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;