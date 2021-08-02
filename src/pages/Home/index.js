import useLocalStorage from "hooks/useLocalStorage";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Table from "components/Table";
import NewDeliveryModal from "components/NewDeliveryModal";

import initialData from "./initialData.json";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setDeliveries] = useLocalStorage("nuvo-deliveries", initialData);
  const [newModalOpen, setNewModalOpen] = useState(!false);

  function openModal() {
    setNewModalOpen(true);
  }

  function closeModal() {
    setNewModalOpen(false);
  }

  const deliveries =
    search === ""
      ? data.deliveries
      : data.deliveries.filter((delivery) =>
          Object.values(delivery).some((value) =>
            value.toString().toLowerCase().includes(search.toLowerCase())
          )
        );

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <NavBar />
      <div className="lg:container lg:mx-auto flex flex-col mx-10 flex-auto min-h-full">
        <div className="flex justify-between">
          <h1 className="text-2xl sm:text-3xl mb-3">
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
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-nuvoGreen-base rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-nuvoGreen-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nuvoGreen-base"
              onClick={openModal}
            >
              New delivery
            </button>
          </div>
        </div>
        <Table data={deliveries} isSearching={!!search} />
      </div>
      <Footer />
      <NewDeliveryModal isOpen={newModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Home;
