import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// import PersonIcon from "@mui/icons-material/Person";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./card.scss";
import { CardDetails } from "../../data/Data";
const Card = () => {
  return (
    <div className="container">
      <div className="">
        <div className=" d-flex ">
          <Swiper
            // FreeMode={true}
            spaceBetween={5}
            slidesPerView={2.8}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {CardDetails.map((data, ind) => (
              <SwiperSlide>
                <div className="card  m-2 ">
                  <div className="card-body">
                    <h5 className="card-title">{data.users}</h5>
                    <p className="card-text">{data.totUsers}</p>
                    <a href="/" className="">
                      {data.link}
                    </a>
                    {data.icon}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Card;
