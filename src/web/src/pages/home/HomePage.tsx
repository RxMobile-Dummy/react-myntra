import React, { useState, useEffect } from "react";
import "./HomePage.css";
import OfferSlider from "../../components/offerslider/OfferSlider";
import Title from "../../components/text/Title";
import DealsProductsList from "../../components/dealsproduct/DealsProductsList";
import TopPicksList from "../../components/toppicks/TopPicksList";
import {
  
  offers,
  topPicksProducts,
} from "../../constants/Products";
import { useSelector, useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { GetAllProducts, ResetGetAllProductsState, RootState } from "core";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allproducts, setAllproducts] = useState<any>([]);
  const [bestProduct, setBestProduct] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  let { getprData, getprError } = useSelector(
    (state: RootState) => state.getAllProductsReducer
  );
  console.log("Get Product Data State...", getprData);

  async function getProductData() {
    try {
      setLoading(true);
      let reqData: any = {
        authToken: localStorage.getItem("token"),
      };
      await dispatch<any>(GetAllProducts(reqData));
      setAllproducts([...getprData]);
      setBestProduct([...getprData]);
      NotificationManager.success(
        "Get All Product Data successfully",
        "",
        2000
      );
      // console.log("All Products...", allproducts);
      setLoading(false);
    } catch (getprError: any) {
      console.error(getprError);
      dispatch<any>(ResetGetAllProductsState());
      NotificationManager.error(getprError, "", 2000);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <OfferSlider offerData={offers} />
      <Title title={"Deals of the day"} />
      <DealsProductsList allproducts={allproducts} />
      <Title title={"BEST OF MYNTRA EXCLUSIVE BRANDS"} />
      <DealsProductsList allproducts={bestProduct} />
      {/* <DealsProductsList allproducts={bestProducts} /> */}
      <Title title={"TOP PICKS"} />
      <TopPicksList products={topPicksProducts} />
    </>
  );
};

export default HomePage;
