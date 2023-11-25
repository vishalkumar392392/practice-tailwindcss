import { Select } from "./Select";
import shoeimage from "../assets/n1-min.png";
export const ShoeDetail = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row-reverse space-y-4">
        <div className="flex-1 lg:-mt-32 lg:ml-28">
          <div className="flex justify-center items-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
            <img className="animate-float" src={shoeimage} />
          </div>
        </div>
        <div className="flex-1">
          <div className="md:font-extrabold md:text-9xl font-extrabold text-6xl">
            Nike Air Max 270
          </div>
          <div className="mt-8 text-xl">
            {
              "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
            }
          </div>
          <div className="flex items-center mt-6 space-x-6">
            <div className="font-bold md:text-6xl text-4xl  ">100 $ </div>
            <div>
              <Select items={[1, 2, 3, 4, 5]} title="QTY" />
            </div>
            <div>
              <Select items={[41, 42, 43, 44, 45, 46, 47]} title="SIZE" />
            </div>
          </div>
          <div className="mt-6 space-x-8">
            <button className="px-12 py-4 bg-black text-white btn-press-anim ">
              Add to bag
            </button>
            <a className="font-semibold underline underline-offset-4 text-lg cursor-pointer">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
