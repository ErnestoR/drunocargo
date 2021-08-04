import { useState } from "react";
import produce from "immer";

import useLocalStorage from "hooks/useLocalStorage";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Table from "components/Table";
import NewDeliveryModal from "components/NewDeliveryModal";
import initialData from "data/initialData.json";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setDeliveries] = useLocalStorage("nuvo-deliveries", initialData);
  const [modalState, setModalState] = useState(null);

  function openNewModal() {
    setModalState(true);
  }

  function openEditModal(editEntry) {
    setModalState(editEntry);
  }

  function closeModal() {
    setModalState(false);
  }

  function createDeliveryEntry(newEntry) {
    const addedDeliveriesData = produce(data, (draft) => {
      draft.deliveries.unshift(newEntry);
    });

    setDeliveries(addedDeliveriesData);
    setModalState(false);
  }

  function editDeliveryEntryByOrderID(delivery) {
    const editedDeliveriesData = produce(data, (draft) => {
      const index = draft.deliveries.findIndex(
        (item) => item.orderID === delivery.orderID
      );

      if (index !== -1) {
        draft.deliveries[index] = delivery;
      }
    });

    setDeliveries(editedDeliveriesData);
    setModalState(false);
  }

  function deleteDeliveryEntryByOrderID(delivery) {
    const deletedDeliveriesData = produce(data, (draft) => {
      const index = draft.deliveries.findIndex(
        (item) => item.orderID === delivery.orderID
      );

      if (index !== -1) {
        draft.deliveries.splice(index, 1);
      }
    });

    setDeliveries(deletedDeliveriesData);
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
              onClick={openNewModal}
            >
              New delivery
            </button>
          </div>
        </div>
        <Table
          data={deliveries}
          isSearching={!!search}
          deleteDelivery={deleteDeliveryEntryByOrderID}
          editDelivery={openEditModal}
        />
      </div>
      <Footer />
      <NewDeliveryModal
        isOpen={!!modalState}
        isEditMode={modalState !== true}
        closeModal={closeModal}
        createDeliveryEntry={createDeliveryEntry}
        editDeliveryEntry={editDeliveryEntryByOrderID}
        values={modalState}
      />
    </div>
  );
};

export default Home;
