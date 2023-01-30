import banner from "../../images/breadbg1.jpg";
import scrollArrow from "../../images/scroll-arrow.png";

const HomePage = () => {
  return (
    <div className="main-part">
      <section
        className="breadcrumb-part"
        data-stellar-offset-parent="true"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="breadcrumb-inner">
            <h2>Home</h2>
            {/* <Link to="#">Home</Link> */}
            <span>Shop</span>
          </div>
        </div>
      </section>

      <section className="home-icon blog-main-section shop-page">
        <div className="icon-default">
          <img src={scrollArrow} alt="" />
        </div>
        <div className="container">
          <div className="portfolioFilter">
            <div className="portfolioFilter-inner bg-skeen">
              {/* {categories.map((category) => (
                        <Category
                            key={category.id}
                            scategory={category}
                        ></Category>
                    ))} */}
            </div>
          </div>
          <div
            className="portfolioContainer row"
            data-defaultfilter=".breakfast"
          >
            {/* {menus.map((menu) => (
                    <Menu key={menu.id} menus={menu}></Menu>
                ))} */}
          </div>
          {/* <div className="gallery-pagination">
                <div className="gallery-pagination-inner">
                    <ul>
                        <li>
                            <Link to="#" className="pagination-prev">
                                <i
                                    className="fa fa-arrow-left"
                                    aria-hidden="true"
                                ></i>
                                <span>PREV page</span>
                            </Link>
                        </li>
                        <li className="active">
                            <Link to="#">
                                <span>1</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span>2</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span>3</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="pagination-next">
                                <span>next page</span>
                                <i
                                    className="fa fa-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
