import React from "react";
import { Categories } from "../../constants/CategoriesData";
import CheckBox from "../checkbox/CheckBox";

interface Props {
  price: number | string;
  minPrice: number | string;
  maxPrice: number | string;
  selected?: boolean;
  handleChange?: () => void;
  brands: any;
  brandChange?: any;
}
export default function Filter(props: Props) {
  const { price, minPrice, maxPrice, handleChange, brands, brandChange } =
    props;
  return (
    <div className="">
      <div className="form-group my-4">
        {/* <input
          className="form-range"
          type="range"
          id="price"
          name="price"
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={handleChange}
        /> */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {Categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="list-cus"
                  style={{ marginTop: "1rem" }}
                >
                  {index !== 0 && <div className="border-top"></div>}
                  <p className="fw-bolder" style={{ marginTop: "1rem" }}>
                    {category.categoryName}
                  </p>
                  {category.categoriesData.map((data, index) => {
                    return (
                      <CheckBox
                        key={index}
                        name={data.name}
                        checked={false}
                        quantity={data.quantity}
                      />
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
      <div className="border-top"></div>

      {brands.length !== 0 && <div className="border-top"></div>}
      <div className="my-4">
        {brands.map((brand: any, index: number) => {
          return (
            <div className="form-check my-2" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                onChange={(event) => {
                  brandChange(index);
                }}
              />
              <label
                htmlFor={`brandCheckbox${index}`}
                className="form-check-label text-capitalize"
              >
                {brand.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
