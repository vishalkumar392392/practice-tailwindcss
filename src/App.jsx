import { useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivals } from "./components/NewArrivals";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constants";

function App() {
  const [isBagClicked, setIsBagClicked] = useState(false);
  return (
    <div className="pt-[45px] md:px-[100px] px-[50px]">
      <Nav setIsBagClicked={() => setIsBagClicked(true)} />
      <ShoeDetail />
      <div className="flex justify-center items-center">
        <div className="bg-center mt-20 mb-14 font-bold text-4xl bg-[url(./assets/lines.png)]">
          NEW ARRIVALS
        </div>
      </div>
      <div className="justify-between grid grid-cols-1 lg:grid-cols-[repeat(3,25%)] md:gap-x-12">
        {SHOE_LIST.map((item) => (
          <NewArrivals key={item} item={item} />
        ))}
      </div>

      <Sidebar
        isBagClicked={isBagClicked}
        setIsBagClicked={() => setIsBagClicked(!isBagClicked)}
      />
    </div>
  );
}

export default App;
