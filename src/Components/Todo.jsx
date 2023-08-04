import React, { useState, useEffect } from "react";
import "./style.css";

function Todo() {
  const [count, setCount] = useState(
    localStorage.getItem("count") === null
      ? {
          twoThousand: 0,
          fiveHundred: 0,
          twoHundred: 0,
          hundred: 0,
          fifty: 0,
          twenty: 0,
          twentyCoin: 0,
          ten: 0,
          tenCoin: 0,
          five: 0,
          two: 0,
          one: 0,
          qr1: 0,
          qr2: 0,
          qr3: 0,
          totalCollection: 0,
        }
      : JSON.parse(localStorage.getItem("count"))
  );

  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));

    let totalcount =
      count.twoThousand * 2000 +
      count.fiveHundred * 500 +
      count.twoHundred * 200 +
      count.hundred * 100 +
      count.fifty * 50 +
      count.twenty * 20 +
      count.twentyCoin * 20 +
      count.ten * 10 +
      count.tenCoin * 10 +
      count.five * 5 +
      count.two * 2 +
      count.one * 1 +
      count.qr1 * 1 +
      count.qr2 * 1 +
      count.qr3 * 1;

    setTotal(totalcount);
  }, [count]);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    const name = e.target.name;

    if (isNaN(value)) {
      value = Number(0);
    } else {
      value = Number(value);
    }

    setCount({
      ...count,
      [name]: [value],
    });
  };

  return (
    <>
      <h1 className="text-center text-white bold">JAISWAL ONLINE SERVICES</h1>
      <div className="col-sm-12 col-md-6 col-xs-12 respon d-flex flex-column align-items-center justify-content-around m-1">
        <div className="d-flex">
          <input
            className="form-control text-center small-total w-25"
            type="number"
            value={count.totalCollection}
            name="totalCollection"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <h1 className="bg-dark fs-4 p-2 text-white text-center mx-auto rounded small-total">
            {count.totalCollection - total}
          </h1>
        </div>
      </div>
      <div className="row text-white pt-4 text-center">
        <div className=" col-sm-12 col-md-6 col-xs-12">
          <div className="row">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                2000
              </span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.twoThousand}
                name="twoThousand"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {count.twoThousand * 2000}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                500
              </span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.fiveHundred}
                name="fiveHundred"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {500 * count.fiveHundred}
              </span>
            </div>
          </div>
          <div className="row mt-3 text-center">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                200
              </span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.twoHundred}
                name="twoHundred"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {200 * count.twoHundred}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                100
              </span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.hundred}
                name="hundred"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {100 * count.hundred}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">50</span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.fifty}
                name="fifty"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {50 * count.fifty}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">20</span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.twenty}
                name="twenty"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {20 * count.twenty}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                20 Coin
              </span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.twentyCoin}
                name="twentyCoin"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {20 * count.twentyCoin}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">10</span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.ten}
                name="ten"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {10 * count.ten}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                10 coin
              </span>
              <input
                className="form-control maxw text-center"
                type="number"
                value={count.tenCoin}
                name="tenCoin"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {10 * count.tenCoin}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">5</span>
              <input
                className="form-control text-center maxw"
                type="number"
                value={count.five}
                name="five"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {5 * count.five}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">2</span>
              <input
                className="form-control text-center maxw"
                type="number"
                value={count.two}
                name="two"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {2 * count.two}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">1</span>
              <input
                className="form-control text-center maxw"
                type="number"
                value={count.one}
                name="one"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {count.one}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">QR</span>
              <input
                className="form-control text-center maxw"
                type="number"
                value={count.qr1}
                name="qr1"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {count.qr1}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">QR</span>
              <input
                className="form-control text-center maxw"
                type="number"
                value={count.qr2}
                name="qr2"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {count.qr2}
              </span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="d-flex justify-content-evenly">
              <span className="bg-success rounded py-1 px-4 fs-5 minw">QR</span>
              <input
                className="form-control text-center maxw"
                type="number"
                value={count.qr3}
                name="qr3"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <span className="bg-success rounded py-1 px-4 fs-5 minw">
                {count.qr3}
              </span>
            </div>
          </div>
          <h1 className="m-5 bg-dark rounded small-total">{total}</h1>
        <button onClick={()=>setCount({twoThousand: 0,
          fiveHundred: 0,
          twoHundred: 0,
          hundred: 0,
          fifty: 0,
          twenty: 0,
          twentyCoin: 0,
          ten: 0,
          tenCoin: 0,
          five: 0,
          two: 0,
          one: 0,
          qr1: 0,
          qr2: 0,
          qr3: 0,
          totalCollection: 0,})} className="btn bg-danger mb-3 p-2">Reset</button>
        </div>

      </div>
    </>
  );
}

export default Todo;
