import React from "react";
import styles from "./Footer.css";
import { LogoIcon } from "../svg/LogoIcon";
import FacebookIcon from "../svg/FacebookIcon";
import TwitterIcon from "../svg/TwitterIcon";
import InstagramIcon from "../svg/InstagramIcon";

function Footer() {
    return (
        <div class="columns-3 ...">
            <LogoIcon />
            <h4>Контакты</h4>
            <u1 className="listFooter">
                <li><a href="tel:375337777171">+375 (33) 777  71 71</a></li>
                <li><a href="a">sneackers.by@gmail.com</a></li>
                <li><a href="a">Беларусь, г. Минск, ул. Западная 34/1</a></li>
                <li><a href="a">пн-пт 10:00-20:00</a></li>
            </u1>
            <h4>Информация</h4>
            <u1 className="listFooter">
                <li><a href="a">О компании</a></li>
                <li><a href="a">Таблица размеров</a></li>
                <li><a href="a">Уход за товаром</a></li>
                <li><a href="a">Политика конфиденциальности</a></li>
            </u1>
            <h4>Помощь</h4>
            <u1 className="listFooter">
                <li><a href="a">Оформление заказа</a></li>
                <li><a href="a">Доставка и оплата</a></li>
                <li><a href="a">Возврат и обмен</a></li>
            </u1>
            <TwitterIcon />;
            <FacebookIcon />;
            <InstagramIcon />;
        </div>
    );
};

export default Footer;