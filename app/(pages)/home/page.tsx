import LeftSide from "./ui/leftSide/LeftSide";
import Brands from "./ui/brands/Brands";
import RightSide from "./ui/rightSide/RightSide";
import NewArrivals from "./ui/newArrivals/NewArrivals";
import TopSelling from "./ui/topSelling/TopSelling";
import "./style.scss";
import BrowseByCategory from "./ui/browseByCategory/BrowseByCategory";

const HomePage = () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <>
      <div className="landingSection">
        <div className="container">
          <LeftSide />
          <RightSide />
        </div>
        <Brands />
      </div>
      <div className="productDisplaySection">
        <div className="container">
          <NewArrivals />
          <TopSelling />
        </div>
      </div>
      <div className="container">
        <BrowseByCategory />
      </div>
    </>
  );
};

export default HomePage;
