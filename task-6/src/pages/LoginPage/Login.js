import React from "react";
import logo from "../../components/img/cmp.svg";
import "./Login.css";

export default function Login(props) {
  const handleLogin = () => {
    props.history.push("/costumers");
  };

  return (
    <div className="h-100">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              <img src={logo} alt="logo" width="100px" height="100px" />
            </div>
            <div className="card border-warning shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold text-center mb-4">
                  Login
                </h1>
                <form>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label
                        className="mb-2 text-dark"
                        for="username"
                        placeholder="Username"
                      >
                        User Name:
                      </label>
                      <input
                        id="username"
                        type="username"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        required
                        autofocus
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-dark " for="password">
                        Password:
                      </label>
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <button
                      type="submit"
                      class="btn btn-warning ms-auto"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="text-center mt-5 text-dark">
              Copyright &copy; 2017-2021 &mdash; Ekonsoft Bilişim Teknolojileri
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
