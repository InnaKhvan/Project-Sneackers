import BreadCrumbs from "../svg/BreadCrumbs";
import TickSymbolThanksPage from "../svg/TickSymbolThanksPage";

function ThankYouPage() {
    return (
        <div className="flex">
            <div className="md:container md:mx-auto">
                <BreadCrumbs className="left-0 top-0 h-16 w-16" />
                <TickSymbolThanksPage className="place-content-center inset-0" />
            </div>
        </div>
    )
}

export default ThankYouPage