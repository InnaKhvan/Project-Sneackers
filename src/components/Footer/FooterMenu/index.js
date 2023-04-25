const FooterMenu = ({ className, title = "", items = [] }) => {
    return (
        <div className={className + " text-xs"}>
            <div className="font-semibold pb-5">
                {title.toUpperCase()}
            </div>
            <ul>
            {items.map((item) =>
                <li className="pb-2.5">
                    <a href={item.link}>
                        {item.title}
                    </a>
                </li>
            )}
            </ul>
        </div>
    )
}

export default FooterMenu;