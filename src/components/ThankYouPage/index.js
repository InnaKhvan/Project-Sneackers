import Navigation from "../Navigation";
import ThankYouUnderText from "../svg/ThankYouUnderText";
import ThankYouText from "../svg/ThannkYouText";
import TickSymbolThanksPage from "../svg/TickSymbolThanksPage";
import React from "react";

function ThankYouPage() {
    return (
        <div className="container md:mx-auto">
            <Navigation name="Оформление заказа"></Navigation>
            <div className="flex flex-col mt-[154px] mb-[146px] ml-[382px] mr-[389px] items-center gap-[2.75rem]">
                <div><TickSymbolThanksPage /></div>
                <div><ThankYouText></ThankYouText></div>
                <div><ThankYouUnderText></ThankYouUnderText></div>
            </div>
        </div>
    )
}

export default ThankYouPage