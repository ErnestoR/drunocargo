import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Table from "components/Table";

import { SearchIcon } from "@heroicons/react/solid";

const Home = () => (
  <div className="flex flex-col w-screen min-h-screen">
    <NavBar />
    <div className="lg:container lg:mx-auto flex flex-col mx-10 overflow-y-auto mb-auto">
      <div className="flex justify-between ">
        <h1 className="text-2xl sm:text-3xl mb-3" flex>
          Delivery <span className=" font-light opacity-50">History</span>
        </h1>
        <div className="flex gap-4 p-1">
          <input
            type="text"
            className="rounded border-opacity-10 border-gray-900 focus:outline-none focus:ring-2  focus:ring-nuvoGreen-base"
            placeholder="&#xF002; Search"
            style={{
              fontFamily: "Inter var, FontAwesome",
            }}
          />
          <button className="bg-nuvoGreen-base rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-nuvoGreen-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nuvoGreen-base">
            New delivery
          </button>
        </div>
      </div>
      <Table />
    </div>
    <Footer />
  </div>
);

export default Home;
