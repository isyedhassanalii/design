import banner from "../../images/breadbg1.jpg";
import scrollArrow from "../../images/scroll-arrow.png";

const LoginPage = () => {
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
            <h2>Login </h2>
            {/* <Link to="#">Home</Link> */}
            <span>Shop</span>
          </div>
        </div>
      </section>

      <section className="home-icon login-register bg-skeen">
        <div className="icon-default icon-skeen">
          <img src={scrollArrow} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-sm-6 col-xs-12 wow fadeInDown col-md-offset-3"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="login-wrap form-common">
                <div className="title text-center">
                  <h3 className="text-coffee">Login</h3>
                </div>
                <form
                  className="login-form"
                  method="post"
                  name="login"
                  onSubmit=""
                >
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email here"
                        required
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter password here"
                        required
                      />
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="submit"
                        name="submit"
                        value="LOGIN"
                        className="button-default button-default-submit"
                      />
                    </div>
                  </div>
                </form>
                <div className="divider-login">
                  <hr />
                  <span>Or</span>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <input
                      style={{ width: "100%" }}
                      type="submit"
                      name="submit"
                      value="REGISTER"
                      className="button-default button-default-submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
