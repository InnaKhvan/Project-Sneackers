import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "../svg/FacebookIcon";
import TwitterIcon from "../svg/TwitterIcon";
import InstagramIcon from "../svg/InstagramIcon";
import FooterMenu from "./FooterMenu";
import LogoWhiteIcon from "../svg/LogoWhiteIcon";

function Footer() {
    const contactMenuItems = [
        {
            title: '+375 (33) 777 71 71',
            link: 'tel: +375 (33) 777 71 71'
        },
        {
            title: 'sneakers.by@gmail.com',
            link: 'mailto: sneakers.by@gmail.com'
        },
        {
            title: 'Беларусь, г. Минск, ул. Западная 34/1',
            link: ''
        },
        {
            title: 'пн-пт 10:00-20:00',
            link: ''
        }
    ]
    const informationMenuItems = [
        {
            title: 'О компании',
            link: ''
        },
        {
            title: 'Таблица размеров',
            link: ''
        },
        {
            title: 'Уход за товаром',
            link: ''
        },
        {
            title: 'Политика конфидицеальности',
            link: ''
        }
    ]
    const helpMenuItems = [
        {
            title: 'Оформление заказа',
            link: ''
        },
        {
            title: 'Доставка и оплата',
            link: ''
        },
        {
            title: 'Возврат и обмен',
            link: ''
        },
    ]

    return (
        <div className="absolute inset-x-0 bottom-0 h-16">
            <div className={styles.footer + " py-10"}>
                <div className="container grid grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-12 absolute inset-x-0 bottom-0 h-16">
                    <div className="col-span-2 desktop:col-span-3">
                        <LogoWhiteIcon />
                    </div>

                    <FooterMenu title="Контакты" items={contactMenuItems} className="col-span-2" />
                    <FooterMenu title="Информация" items={informationMenuItems} className="col-span-2 hidden tablet:block" />
                    <FooterMenu title="Помощь" items={helpMenuItems} className="col-span-2 hidden tablet:block" />
                    <div className="col-span-3 hidden tablet:flex space-x-7">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;