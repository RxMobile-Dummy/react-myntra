import React from "react";
import "./HomePage.css";

import OfferSlider from "../../components/offerslider/OfferSlider";
import Title from "../../components/text/Title";
import DealsProductsList from "../../components/dealsproduct/DealsProductsList";
import TopPicksList from "../../components/toppicks/TopPicksList";
import {
  bestProducts,
  offers,
  products,
  topPicksProducts,
} from "../../constants/Products";

const HomePage = () => {
  return (
    <>
      <OfferSlider offerData={offers} />
      <Title title={"Deals of the day"} />
      <DealsProductsList products={products} />
      <Title title={"BEST OF MYNTRA EXCLUSIVE BRANDS"} />
      <DealsProductsList products={bestProducts} />
      <DealsProductsList products={bestProducts} />
      <Title title={"TOP PICKS"} />
      <TopPicksList products={topPicksProducts} />
    </>
  );
};

export default HomePage;
