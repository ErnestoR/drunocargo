import { useParams } from "react-router";

import useLocalStorage from "hooks/useLocalStorage";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import initialData from "data/initialData.json";

import EmptyDelivery from "./EmptyDelivery";

const ShipmentDetailsByID = () => {
  const [data] = useLocalStorage("nuvo-deliveries", initialData);
  const { id } = useParams();
  const delivery = data.deliveries.find((item) => item.orderID === id);

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <NavBar />
      <div className="lg:container lg:mx-auto flex flex-col mx-10 flex-auto min-h-full">
        {delivery === undefined ? (
          <EmptyDelivery />
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-screen-lg mt-10 mx-auto">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Delivery Detail
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Order details and application.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Order ID
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    #{delivery.orderID}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {delivery.status}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Technician
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {delivery.technician}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Platform
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {delivery.platform}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Drone</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {delivery.drone}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Technical Check
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {delivery.technicalCheck ? "Passed" : "Failed"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShipmentDetailsByID;
