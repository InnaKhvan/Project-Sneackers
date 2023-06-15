import Navigation from "../Navigation";
import ThankYouUnderText from "../svg/ThankYouUnderText";
import ThankYouText from "../svg/ThannkYouText";
import TickSymbolThanksPage from "../svg/TickSymbolThanksPage";
import React from "react";

function ThankYouPage() {
    return (
        <div className="container md:mx-auto">
            <div className="md:container md:mx-auto">
                <Navigation name="Оформление заказа"></Navigation>
                <TickSymbolThanksPage className="place-items-center" />
                <ThankYouText></ThankYouText>
                <ThankYouUnderText></ThankYouUnderText>
            </div>
        </div>
    )
}

export default ThankYouPage