import React from "react";
import "../App.css";
function Bill() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "5px" }}></div>
      </div>
      <hr />
      <div class="container">
        <center>
          <h3>
            <strong>Bill & Recharge</strong>
          </h3>
        </center>
        <div class="row">
          <div class="col-lg-3">
            <a href="/bills&recharge">
              {" "}
              <button
                type="button"
                class="btn btn-secondary active"
                data-bs-toggle="collapse"
                data-bs-target="#demo"
                style={{ fontSize: "12px" }}
              >
                My Bills
              </button>
            </a>
            <div id="demo" class="collapse">
              <p></p>
              <div class="container88">
                <div class="row">
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/mobileicon.png"
                        class="icons"
                        alt="mobileicon"
                      />
                      Prepaid
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/mobileicon.png"
                        class="icons"
                        alt="mobileicon"
                      />
                      Postpaid
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/electricity.png"
                        class="icons"
                        alt="electricity"
                      />
                      Electricity
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/gas.png"
                        class="icons"
                        alt="gas"
                      />
                      Cylinder
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/water.png"
                        class="icons"
                        alt="water"
                      />
                      water
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/mobileicon.png"
                        class="icons"
                        alt="mobileicon"
                      />
                      Landline
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/insurance.png"
                        class="icons"
                        alt="insurance"
                      />
                      Insurance
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/gas.png"
                        class="icons"
                        alt="gas"
                      />
                      Pay Gas Bill
                    </a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/water.png"
                        class="icons"
                        alt="water"
                      />
                      Boardband
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/mobileicon.png"
                        class="icons"
                        alt="water"
                      />
                      Disk-1
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/insurance.png"
                        class="icons"
                        alt="insurance"
                      />
                      Fastag
                    </a>
                  </div>
                  <div class="col-lg-3 col-lg-31">
                    <a style={{ fontSize: "12px" }}>
                      <img
                        src="./images/fafa icon/gas.png"
                        class="icons"
                        alt="gas"
                      />
                      TV Cable
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <a href="/bills&recharge">
              {" "}
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="collapse"
                data-bs-target="#demo2"
                style={{ fontSize: "12px" }}
              >
                Mobiles
              </button>
            </a>
            <div id="demo2" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo3"
              style={{ fontSize: "12px" }}
            >
              DTH
            </button>
            <div id="demo3" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo4"
              style={{ fontSize: "12px" }}
            >
              Electrical
            </button>
            <div id="demo4" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "5px" }}></div>
        <div class="row">
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo5"
              style={{ fontSize: "12px" }}
            >
              Gas<span style={{ color: "blue" }}>gas</span>
            </button>
            <div id="demo5" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo6"
              style={{ fontSize: "12px" }}
            >
              Landlines
            </button>
            <div id="demo6" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo12"
              style={{ fontSize: "12px" }}
            >
              Water
            </button>
            <div id="demo12" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo7"
              style={{ fontSize: "12px" }}
            >
              Insurance
            </button>
            <div id="demo7" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div class="row">
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo8"
              style={{ fontSize: "12px" }}
            >
              Cable TV
            </button>
            <div id="demo8" class="collapse">
              <p></p>

              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo9"
              style={{ fontSize: "12px" }}
            >
              FastTag
            </button>
            <div id="demo9" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo11"
              style={{ fontSize: "12px" }}
            >
              Loan
            </button>
            <div id="demo11" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }} class="h"></div>
          <div class="col-lg-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="collapse"
              data-bs-target="#demo10"
              style={{ fontSize: "12px" }}
            >
              Boardband
            </button>
            <div id="demo10" class="collapse">
              <p></p>
              <div class="container88">
                <form>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="planType"
                        id="prepaid"
                        value="prepaid"
                        checked
                      />
                      <label class="form-check-label " for="prepaid">
                        Prepaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="planType"
                        id="postpaid"
                        value="postpaid"
                      />
                      <label class="form-check-label mx-2" for="postpaid">
                        {" "}
                        Postpaid
                      </label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Reachrage Plan"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5>
        <strong>Popular Categories</strong>
      </h5>
      <p style={{ color: "grey", fontSize: "12px" }}>
        Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
        Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
        Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
        Sexologist Doctors | Neurologists | Gynaecologist | & Obstetrician |
        Doctors |Train Ticket| Booking Agents| Travel Agents| Paying Guest
        Accommodations| General Physician Doctors| Dentists| Orthopaedic
        Doctors| Chemists| Motor Training Schools| Gastroenterologists |Car
        Rental| Salons Courier Services |Dance Classes| Pathology Labs| Taxi
        Services| Cake Shops| AC Repair & Services| Mobile Phone| Dealers| Pet
        Shops | Dmart| Packers And Movers| Psychiatrists| Dharamshalas|
        Urologist Doctors| Bakeries | Bicycle | Dealers Coffee Shops|
        Paediatricians |Sonography Centres | Yoga Classes| Hostels
        Cardiologists| Electrical Shops| Skin Care Clinics | Diagnostic Centres|
        Homeopathic Doctors | Physiotherapists | Photo Studios | Plumbers |Music
        Classes| Electricians| Sports |Goods Dealers| Shoe Dealers| Hair
        Stylists| Gift Shops | Ophthalmologists | Car Repair & Services
        |Ayurvedic Doctors| Eye Clinics| Restaurants| Carpenters| Jewellery|
        Showrooms |Cooks On Hire |Stationery Shops| Nephrologists |Caterers
        Interior Designers| Rehabilitation Center | Grocery Stores |Banks ATM |5
        Star Hotels |Hotels |Resorts |Plastic Surgeons
      </p>
      <div style={{ padding: "2px" }}></div>
    </div>
  );
}

export default Bill;
