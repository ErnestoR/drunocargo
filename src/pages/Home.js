import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Table from "components/Table";

const Home = () => (
  <div className="flex flex-col w-screen min-h-screen">
    <NavBar />
    <div className="lg:container lg:mx-auto flex flex-col mx-10 overflow-y-auto mb-auto">
      <h1 className="text-2xl sm:text-3xl mb-3">
        Delivery <span className="font-light opacity-50">History</span>
      </h1>
      <Table />
    </div>
    <Footer />
  </div>
);

export default Home;
