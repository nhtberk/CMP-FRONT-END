import React from "react";

const CostumersAdd = () => {
  return (
    <div className="container">
      <div className="card border-primary shadow-lg mt-3">
        <div className="card-body p-4">
          <h1 className="fs-4 card-title fw-bold text-center mb-4 ">
            Costumer Add
          </h1>
          <div className="row justify-content-md-center">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card border-primary shadow-lg mt-5">
                <div className="card-body p-4">
                  <h1 className="fs-4 card-title fw-bold text-center mb-4">
                    Project Details
                  </h1>
                  <form>
                    <div className="mb-3">
                      <div className="mb-2 w-75">
                        <label className="mb-2 text-dark" for="projectname">
                          Project Name:
                        </label>
                        <input
                          type="projectname"
                          className="form-control"
                          id="projectname"
                          placeholder="Project Name"
                          name="projectname"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label
                          className="mb-2 text-dark"
                          for="projectplatforms"
                        >
                          Project Platforms:
                        </label>
                        <input
                          type="projectplatforms"
                          className="form-control"
                          id="projectplatforms"
                          placeholder="Project Platforms"
                          name="projectplatforms"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="mb-2 text-dark" for="projectdeadline">
                          Project Deadline:
                        </label>
                        <input
                          type="projectdeadline"
                          className="form-control"
                          id="projectdeadline"
                          placeholder="Project Deadline"
                          name="projectdeadline"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label
                          className="mb-2 text-dark"
                          for="usedtechnologies"
                        >
                          Used Technologies:
                        </label>
                        <input
                          type="usedtechnologies"
                          className="form-control"
                          id="usedtechnologies"
                          placeholder="Used Technologies"
                          name="usedtechnologies"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="mb-2 text-dark" for="projectdetails">
                          Project Details:
                        </label>
                        <textarea
                          type="projectdetails"
                          className="form-control"
                          id="projectdetails"
                          placeholder="Project Details"
                          name="projectdetails"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card border-primary shadow-lg mt-5">
                <div className="card-body p-4">
                  <h1 className="fs-4 card-title fw-bold text-center mb-4">
                    Server Details
                  </h1>
                  <form>
                    <div className="mb-3">
                      <div className="mb-2 w-75">
                        <label
                          className="mb-2 text-dark"
                          for="serverregitration"
                        >
                          Server Registration:
                        </label>
                        <input
                          type="serverregitration"
                          className="form-control"
                          id="serverregitration"
                          placeholder="Server Registration"
                          name="serverregitration"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="mb-2 text-dark" for="serverıp">
                          Server IP:
                        </label>
                        <input
                          type="serverıp"
                          className="form-control"
                          id="serverıp"
                          placeholder="Server IP"
                          name="serverıp"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="mb-2 text-dark" for="serveruser">
                          Server User:
                        </label>
                        <input
                          type="serveruser"
                          className="form-control"
                          id="serveruser"
                          placeholder="Server User"
                          name="serveruser"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="mb-2 text-dark" for="serverpassword">
                          Server Password:
                        </label>
                        <input
                          type="serverpassword"
                          className="form-control"
                          id="serverpassword"
                          placeholder="Server Password"
                          name="serverpassword"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label
                          className="mb-2 text-dark"
                          for="serverpaneladdress"
                        >
                          Server Panel Address:
                        </label>
                        <input
                          type="serverpaneladdress"
                          className="form-control"
                          id="serverpaneladdress"
                          placeholder="Server Panel Address"
                          name="serverpaneladdress"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card border-primary shadow-lg mt-3">
                <div className="card-body p-4">
                  <h1 className="fs-4 card-title fw-bold text-center mb-4">
                    Web Panel Details
                  </h1>
                  <form>
                    <div className="mb-3">
                      <div className="mb-2 w-75">
                        <label className="mb-2 text-dark" for="webpaneluser">
                          Web Panel User:
                        </label>
                        <input
                          type="webpaneluser"
                          className="form-control"
                          id="webpaneluser"
                          placeholder="Web Panel User"
                          name="webpaneluser"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label
                          className="mb-2 text-dark"
                          for="webpanelpassword"
                        >
                          Web Panel Password:
                        </label>
                        <input
                          type="webpanelpassword"
                          className="form-control"
                          id="webpanelpassword"
                          placeholder="Web Panel Password"
                          name="webpanelpassword"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card border-primary shadow-lg mt-3">
                <div className="card-body p-4">
                  <h1 className="fs-4 card-title fw-bold text-center mb-4">
                    Costumer Details
                  </h1>
                  <form>
                    <div className="mb-3">
                      <div className="mb-2 w-75">
                        <label className="mb-2 text-dark" for="costumername">
                          Costumer Name:
                        </label>
                        <input
                          type="costumername"
                          className="form-control"
                          id="costumername"
                          placeholder="Costumer Name"
                          name="costumername"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="mb-2 text-dark" for="costumeradress">
                          Costumer Address:
                        </label>
                        <input
                          type="costumeradress"
                          className="form-control"
                          id="costumeradress"
                          placeholder="Costumer Address"
                          name="costumeradress"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card border-primary shadow-lg mt-3">
                <div className="card-body p-4">
                  <h1 className="fs-4 card-title fw-bold text-center mb-4">
                    Related Person Detail
                  </h1>
                  <form>
                    <div className="mb-3">
                      <div className="mb-2 w-75">
                        <label className="mb-2 text-dark" for="relatedperson">
                          Related Person:
                        </label>
                        <input
                          type="relatedperson"
                          className="form-control"
                          id="relatedperson"
                          placeholder="Related Person"
                          name="relatedperson"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label
                          className="mb-2 text-dark"
                          for="relatedpersonphone"
                        >
                          Related Person Phone:
                        </label>
                        <input
                          type="relatedpersonphone"
                          className="form-control"
                          id="relatedpersonphone"
                          placeholder="Related Person Phone"
                          name="relatedpersonphone"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="card border-primary shadow-lg mt-3">
                <div className="card-body p-4">
                  <h1 className="fs-4 card-title fw-bold text-center mb-4">
                    Mail Details
                  </h1>
                  <form>
                    <div className="mb-3">
                      <div className="mb-2 w-75">
                        <label
                          className="mb-2 text-dark"
                          for="mailserverregistration"
                        >
                          Mail Server Registration:
                        </label>
                        <input
                          type="mailserverregistration"
                          className="form-control"
                          id="mailserverregistration"
                          placeholder="Mail Server Registration"
                          name="mailserverregistration"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="mb-2 text-dark" for="mailinformation">
                          Mail Information:
                        </label>
                        <textarea
                          type="mailinformation"
                          className="form-control"
                          id="mailinformation"
                          placeholder="Mail Information"
                          name="mailinformation"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <button type="submit" class="btn btn-primary ms-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CostumersAdd;
