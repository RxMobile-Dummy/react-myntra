import React from "react";
import { Categories } from "../../constants/CategoriesData";
import CheckBox from "../checkbox/CheckBox";

export default function Filter({
  price,
  minPrice,
  maxPrice,
  handleChange,
  brands,
  brandChange,
}) {
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
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {Categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="list-cus"
                  style={{ marginTop: "1rem" }}
                >
                  {index !== 0 && <div className="border-top"></div>}
                  <p class="fw-bolder" style={{ marginTop: "1rem" }}>
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
      <div className="my-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sortOrder"
            value="ascending"
            onChange={handleChange}
          />
          <label htmlFor="sortOrderAscending" className="form-check-label">
            Low to High
          </label>
        </div>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="sortOrder"
            value="descending"
            onChange={handleChange}
          />
          <label htmlFor="sortOrderDescending" className="form-check-label">
            High to Low
          </label>
        </div>
      </div>
      {brands.length !== 0 && <div className="border-top"></div>}
      <div className="my-4">
        {brands.map((brand, index) => {
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
