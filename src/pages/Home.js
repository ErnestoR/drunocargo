import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Table from "components/Table";

const Home = () => (
  <div className="flex flex-col h-screen">
    <NavBar />
    <main className="container mb-auto mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl">
          Delivery <span className="font-light opacity-50">History</span>
        </h1>
      </div>
      <div className="mt-4">
        <Table />
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
