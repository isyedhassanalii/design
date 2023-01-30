import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { iswish, isWishReq, unWishReq } from "../utils/wishList";
import Rating from "./Rating/Rating";

const Category = () => {
  const [dishes, setDishes] = useState(data);
  const [wList, setWList] = useState(
    JSON.parse(localStorage.getItem("wishList"))
  );
  const filterCategory = (CategoryItem) => {
    const result = data.filter((currentCategory) => {
      return currentCategory.category_data === CategoryItem;
    });
    setDishes(result);
  };
  return (
    <div className="category">
      <div className="row">
        <div className="col">
          <h4 className="filterTitle">Filter by category</h4>
          <div className="btns">
            <button onClick={() => setDishes(data)}>All</button>
            <button onClick={() => filterCategory("Pakistani")}>
              Pakistani
            </button>
            <button onClick={() => filterCategory("Italian")}>Italian </button>
            <button onClick={() => filterCategory("Chinese")}>Chinese</button>
          </div>
        </div>
        <div className="col">
          <h4 className="title">Product Page</h4>
          <div className="cards">
            {dishes.map((dish) => (
              <div className="card" key={dish.id}>
                <div className="cardHeader">
                  <img src={dish.image_path} alt="" />
                </div>
                <div className="cardBody">
                  <h2 className="titleProduct">{dish.short_name}</h2>
                  <Rating value={dish.rating} />
                  <i
                    class="fa fa-heart"
                    onClick={() => isWishReq(dish.id, setWList)}
                    className={`${iswish(dish.id, wList) && "hidden"}`}
                  ></i>

                  <i
                    class="fa fa-heart-o"
                    onClick={() => unWishReq(dish.id, setWList)}
                    className={`${!iswish(dish.id, wList) && "hidden"}`}
                  ></i>

                  <span className="priceProduct">${dish.price}</span>
                  <button>Details</button>
                  <br />
                  <Link to={`/product/${dish.id}`}>asdasd</Link>
                  <div className="absolute top-0 right-0 mx-2 my-2 md:mx-4">
                    <svg
                      onClick={() => isWishReq(dish.id, setWList)}
                      className={`${
                        iswish(dish.id, wList) && "hidden"
                      } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-yellow-700 transition-all duration-300 ease-in wishlist-icon`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <svg
                      onClick={() => unWishReq(dish.id, setWList)}
                      className={`${
                        !iswish(dish.id, wList) && "hidden"
                      } w-5 h-5 md:w-6 md:h-6 cursor-pointer text-yellow-700 transition-all duration-300 ease-in wishlist-icon`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
