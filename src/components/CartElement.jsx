import { RiDeleteBin6Line } from "react-icons/ri";
import { Select } from "./Select";

export const CartElement = ({ shoe }) => {
  return (
    <div className="flex justify-evenly mb-8">
      <img className="h-20 w-20" src={shoe.src} />
      <div className="w-[50%]">
        <div className="font-extrabold">{shoe.title}</div>
        <div className="text-slate-500">{shoe.description}</div>
        <div className="flex space-x-6">
          <div className="mt-4">
            <div className="font-bold">QTY</div>
            <Select
              items={[1, 2, 3, 4, 5]}
              title={"1"}
              className={"pr-10 pl-2 py-2"}
              selectClassName={"inset-y-3"}
            />
          </div>
          <div className="mt-4">
            <div className="font-bold">SIZE</div>
            <Select
              items={[41, 42, 43, 44, 45, 46, 47]}
              title={"42"}
              className={"pr-10 pl-2 py-2"}
              selectClassName={"inset-y-3"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="">{shoe.price + " $"}</div>
        <div className="pb-4 cursor-pointer">
          <RiDeleteBin6Line />
        </div>
      </div>
    </div>
  );
};
