export const isWishReq = (id, setwish) => {
  let list = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];
  if (list.length > 0) {
    if (list.includes(id) !== true) {
      list.push(id);
      localStorage.setItem("wishList", JSON.stringify(list));
      setwish(list);
    }
  } else {
    list.push(id);
    localStorage.setItem("wishList", JSON.stringify(list));
    setwish(list);
  }
};
export const iswish = (id, wList) => {
  if (wList !== null && wList.includes(id) === true) {
    return true;
  } else {
    return false;
  }
};

export const unWishReq = (id, setwish) => {
  let list = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];

  if (list.length > 0) {
    if (list.includes(id) === true) {
      list.splice(list.indexOf(id), 1);
      localStorage.setItem("wishList", JSON.stringify(list));
      setwish(list);
    }
  }
};
