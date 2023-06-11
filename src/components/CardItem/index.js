const { iteratorSymbol } = require("immer/dist/internal")
const { default: FilterSize } = require("../FilterForm/FilterSize")

const CardItem = ({item}) => {
    return (
        <div className="flex flex-row space-x-5 bg-secondary1">
            <div className="flex w-1/2">
               

            </div>
            <div className="flex w-1/2">
<div className="flex text-h2t font-bold	">{item.name}</div>
<div className="text-p1">Артикул: <div className="text-p1 font-semibold	">{item.articul}</div></div>
<div className="text-p1">Цвет: <div className="text-p1 font-semibold">{item.color}</div></div>
<div className="text-p1">Пол: <div className="text-p1 font-semibold">{item.sex}</div></div>
<FilterSize />
<div className="text-xl	font-bold">{item.price}</div>

            </div>
        </div>
    )
}