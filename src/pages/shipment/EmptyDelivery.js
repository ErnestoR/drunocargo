import { useParams } from "react-router";

const EmptyDelivery = () => {
  const { id } = useParams();

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-screen-lg mx-auto mt-16">
      <div className="px-10 py-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Delivery Detail
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          No Data for Order #{id}
        </p>
      </div>
    </div>
  );
};

export default EmptyDelivery;
