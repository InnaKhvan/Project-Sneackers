import styles from "./inputElem.module.css";

const InputElem = ({  }) => {
  return (
    <input 
      className={
        "border-secondary2 border-2 pl-5 h-14 text-p1 mb-2.5 " + styles.input
      }
    />
  );
};
// InputElem.propTypes = {
//   param: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.element),
//     PropTypes.element.isRequired,
//   ]),
//   title: PropTypes.string.isRequired,
// };
export default InputElem;
