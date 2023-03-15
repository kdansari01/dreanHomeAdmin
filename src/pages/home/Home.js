import Card from "../../component/card/Card";
import React from "react";
import "./home.scss";
import Chart from "../../component/chart/Chart";
import Featured from "../../component/featured/Featured";
// import Search from "../../component/search/Search";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
const Dashboard = () => {
  return (
    <div className="home">
      <div className="homeContainer ">
        {/* <div className="d-flex justify-content-center mt-2 mb-3">
          <Search />
        </div> */}

        <div className="w-75">
          {/* <Swiper
            spaceBetween={4}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          > */}
            <Card />
          {/* </Swiper> */}
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex p-4 m-4">
            <div className="col-4">
              <Featured />
            </div>
            <div className="col-lg-8 chart">
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
