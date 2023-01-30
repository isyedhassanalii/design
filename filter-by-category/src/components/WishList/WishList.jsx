const WishList = () => {
  let wishList = JSON.parse(localStorage.getItem("wishList"));
  console.log(wishList);

  return <div>WishList</div>;
};

export default WishList;
