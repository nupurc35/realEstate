import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import HeroBanner from "../components/hero/HeroBanner";
import PropertyCard from "../components/property/PropertyCard";
import AdvancedSearch from "../components/search/AdvancedSearch";

export default function Properties() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroBanner
        title="PROPERTIES LISTING"
        subtitle="Home > Properties Listing"
      />

      <div className="container">
        <div className="listing">
          <PropertyCard />
          <PropertyCard />
        </div>
        <AdvancedSearch />
      </div>
    </>
  );
}