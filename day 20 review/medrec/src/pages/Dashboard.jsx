import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import "../assets/css/Dashboard.css";
import { Link } from "react-router-dom";
import "../assets/css/hesw.css";

function Dashboard() {
  const user = useSelector(selectUser);
  return (
    <>
      <Layout />
      <div className="main-wrapper">
        <div className="welcome-container">
          <h1>
            {" "}
            Welcome{" "}
            <span className=" username-color">
              {user ? user.username : "Guest"}{" "}
            </span>{" "}
            !{" "}
          </h1>
        </div>
        <img
          src={require("../assets/img/Dashboard.jpeg")}
          alt="Slide 8"
          className="slide-image3"
        />
        <div className="welcome-container1">
          <h2> View By Category </h2>
          <div class="clearfix"></div>
          <div class="cat_list">
            <div class="drug_details">
              {" "}
              <Link to="https://www.netmeds.com/non-prescriptions/ayush">
                {" "}
                <span class="custom_img">
                  {" "}
                  <img
                    className="ai"
                    onerror="this.src='/assets/icons/img_placeholder.svg'"
                    src="https://www.himshilajit.com/wp-content/uploads/2021/10/ayush64_bb1.jpg"
                    alt="Ayush"
                  />{" "}
                </span>{" "}
                <div class="cat_title">Ayush</div> <div class="save"> </div>{" "}
              </Link>{" "}
            </div>
            <div class="drug_details1">
              {" "}
              <Link to="https://www.netmeds.com/non-prescriptions/health-conditions/cold-and-fever">
                {" "}
                <span class="custom_img">
                  {" "}
                  <img
                    className="ai"
                    onerror="this.src='/assets/icons/img_placeholder.svg'"
                    src="https://d19bzbo61yzay8.cloudfront.net/pub/media/catalog/product/cache/d4bd18e21a1798ce1454755b1950e778/f/g/fgms100024.jpg"
                    alt="Ayush"
                  />{" "}
                </span>{" "}
                <div class="cat_title1">Cold and Fever</div>{" "}
                <div class="save"> </div>{" "}
              </Link>{" "}
            </div>
            <div class="drug_details2">
              {" "}
              <Link to="https://www.netmeds.com/non-prescriptions/personal-care">
                {" "}
                <span class="custom_img">
                  {" "}
                  <img
                    className="ai"
                    onerror="this.src='/assets/icons/img_placeholder.svg'"
                    src="https://images.jdmagicbox.com/quickquotes/images_main/personal-care-product-2216803678-nl72rhaq.jpg"
                    alt="Ayush"
                  />{" "}
                </span>{" "}
                <div class="cat_title2">Personal Care</div>{" "}
                <div class="save"> </div>{" "}
              </Link>{" "}
            </div>
            <div class="drug_details3">
              {" "}
              <Link to="https://www.netmeds.com/non-prescriptions/treatments/pain-relief-application">
                {" "}
                <span class="custom_img">
                  {" "}
                  <img
                    className="ai"
                    onerror="this.src='/assets/icons/img_placeholder.svg'"
                    src="https://img1.exportersindia.com/product_images/bc-full/2019/6/4242393/pain-relief-spray-1559973590-4942454.jpeg"
                    alt="Ayush"
                  />{" "}
                </span>{" "}
                <div class="cat_title3">Pain Relief</div>{" "}
                <div class="save"> </div>{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-container4">
        <div class="links1">
          <Link to="https://www.netmeds.com/beauty">Beauty</Link>
          <Link to="https://www.healthkart.com/">Vitamins and Suppliments</Link>
          <Link to="https://nutrabay.com/">Health and Nutrition</Link>
          <Link to="https://www.firstaid4less.co.uk/Shop-By-Brand">
            View By Brand
          </Link>
        </div>
      </div>
      <div className="welcome-container2">
        <h2> Health Tips </h2>
        <section class="card__container">
          <div class="card__bx">
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-solid fa-paintbrush"></i>
              </div>
              <div class="card__content">
                <img
                  className="ci1"
                  onerror="this.src='/assets/icons/img_placeholder.svg'"
                  src="data:image/jpeg;base64,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"
                  alt="Ayush"
                />
                <h31>Cool Ways To Use </h31>
                <h31>Cucumber For An </h31>
                <h312>Instant Glow</h312>

                <div className="pinkbtn2 pinkaboutus">
                  <Link to="https://www.healthline.com/health/beauty-skin-care/cucumber-for-skin">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="card__bx1">
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-solid fa-code"></i>
              </div>
              <div class="card__content">
                <img
                  className="ci2"
                  onerror="this.src='/assets/icons/img_placeholder.svg'"
                  src="https://swisse.co.in/cdn/shop/products/Artboard6_7_800x.jpg?v=1681495877"
                  alt="Ayush"
                />

                <h32>Vitamin C and </h32>
                <h321>VitaminB12 Supplements </h321>
                <h313>Together</h313>
                <div className="pinkbtn3 pinkaboutus1">
                  <Link to="ttps://www.netmeds.com/health-library/post/can-you-take-vitamin-c-and-vitamin-b12-supplements-together-health-benefits-and-side-effects">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="card__bx2">
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-brands fa-searchengin"></i>
              </div>
              <div class="card__content">
                <img
                  className="ci3"
                  onerror="this.src='/assets/icons/img_placeholder.svg'"
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2021/02/almonds-9e25ce7.jpg?quality=90&webp=true&resize=375,341"
                  alt="Ayush"
                />
                <h33>Eat Nuts and </h33>
                <h322>Seeds for Bether </h322>
                <h314>Health</h314>
                <div className="pinkbtn3 pinkaboutus1">
                  <Link to="https://www.betterhealth.vic.gov.au/health/healthyliving/nuts-and-seeds">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
