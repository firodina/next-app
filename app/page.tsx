
import Hero from "@/component/Hero/Hero";
import SearchBar from "@/component/SearchBar/SearchBar";
import './globals.css';
import CustomFilter from "@/component/CustomFilter/CustomFilter";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p> Explore the cars you migth like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-contanier">
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
      </div>
    </div>
  );
}
