import React from "react";
import PropTypes from "prop-types";
import styles from "./orderCard.module.css";

const OrderCard = ({ children, title }) => {
  return (
    <div className="flex w-2/3 bg-secondary1">
      <div className={"desktop:m-10 my-5 " + styles.block}>
        <p className={"desktop:text-h2 tablet:text-h2t text-h2m " + styles.text}>{title}</p>
        {children}
      </div>
    </div>
  );
};
OrderCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
};
export default OrderCard;
