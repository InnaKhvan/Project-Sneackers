import Card from "../../CardProduct";

const FeaturedProdacts = ({items}) => {
  return (
    <div className="grid w-full ">
      <div className="flex space-x-2.5 overflow-x-auto tablet:grid grid-cols-2 gap-y-10 gap-x-6 desktop:grid-cols-4 ">
        {items.map((item) => (
          <Card item={item} className="shrink-0 basis-4/5 " />
        ))}
      </div>
    </div>
  );
};
export default FeaturedProdacts;
