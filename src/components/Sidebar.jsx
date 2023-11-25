import { SHOE_LIST } from "../constants";
import { CartElement } from "./CartElement";

export const Sidebar = ({ setIsBagClicked, isBagClicked }) => {
  return (
    <div>
      <div
        className={`p-6 fixed bg-white top-0 right-0 h-full w-full z-20 md:w-[50%] overflow-y-auto duration-700 ${
          isBagClicked ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl">Cart</div>
          <div className="cursor-pointer" onClick={setIsBagClicked}>
            X
          </div>
        </div>
        <div className="bg-gray-100 py-6 mt-6 rounded">
          {SHOE_LIST.map((shoe) => (
            <CartElement key={shoe} shoe={shoe} />
          ))}
        </div>
      </div>
      {isBagClicked && (
        <div className="fixed left-0 top-0 h-full w-full bg-black opacity-50"></div>
      )}
    </div>
  );
};
