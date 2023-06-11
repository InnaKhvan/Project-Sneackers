const ButtonOrder = ({item, className}) => {
  return (
 
      <button className={"bg-primary2 text-secondary1 text-p1 font-bold rounded-xl w-60 h-[60px] " + className}>
       {item}
      </button>
 
  );
};
export default ButtonOrder;
