import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useScreenshot, createFileName } from "use-react-screenshot";

const Calculator = () => {
  const ref = useRef(null);

  const [total, setTotal] = useState(0);
  const [_image, takeScreenshot] = useScreenshot();
  const [noteValues, setNoteValues] = useState(
    localStorage.getItem("noteValues") === null
      ? {
          500: 0,
          200: 0,
          100: 0,
          50: 0,
          20: 0,
          10: 0,
          coin20: 0,
          coin10: 0,
          5: 0,
          2: 0,
          1: 0,
          qr1: 0,
          qr2: 0,
          qr3: 0,
          qr4: 0,
          requiedAmount: 0,
        }
      : JSON.parse(localStorage.getItem("noteValues"))
  );

  const download = (image, { name, extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(
      extension,
      new Date(Date.now()).toISOString()
    );
    a.click();
  };

  const getImage = () => takeScreenshot(ref.current).then(download);

  const currancyArray = [
    { key: "500", value: 500 },
    { key: "200", value: 200 },
    { key: "100", value: 100 },
    { key: "50", value: 50 },
    { key: "20", value: 20 },
    { key: "10", value: 10 },
    { key: "coin20", value: 20 },
    { key: "coin10", value: 10 },
    { key: "5", value: 5 },
    { key: "2", value: 2 },
    { key: "1", value: 1 },
    { key: "qr1", value: 1 },
    { key: "qr2", value: 1 },
    { key: "qr3", value: 1 },
    { key: "qr4", value: 1 },
  ];

  const resetValues = () => {
    const isAgree = window.confirm("Are you sure you want to reset?");

    if (!isAgree) return;

    setNoteValues({
      500: 0,
      200: 0,
      100: 0,
      50: 0,
      20: 0,
      coin20: 0,
      10: 0,
      coin10: 0,
      5: 0,
      2: 0,
      1: 0,
      qr1: 0,
      qr2: 0,
      qr3: 0,
      qr4: 0,
      requiedAmount: 0,
    });
  };

  const handleInputChange = (key, value) => {
    if (isNaN(value)) {
      value = Number(0);
    } else {
      value = Number(value);
    }

    setNoteValues({
      ...noteValues,
      [key]: [value],
    });
  };

  useEffect(() => {
    localStorage.setItem("noteValues", JSON.stringify(noteValues));

    setTotal(
      currancyArray.reduce(
        (previousValue, item) =>
          previousValue + noteValues[item.key] * item.value,
        0
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteValues]);

  return (
    <>
      <div
        className="w-screen min-h-screen font-semibold bg-gradient-to-r from-slate-500 to-slate-800"
        ref={ref}
      >
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl text-center font-bold font-ubuntu text-white">
            JAISWAL ONLINE SERVICES
          </h1>
          <div className="flex justify-between my-2 text-lg">
            <div className="flex-1 text-center flex items-center justify-center">
              <p className="bg-green-400 w-24 rounded-md">To Collect</p>
            </div>
            <input
              value={noteValues.requiedAmount}
              onChange={(e) => {
                handleInputChange("requiedAmount", e.target.value);
              }}
              className="w-24 text-center rounded-md"
              type="number"
              placeholder="Requied amount"
            />
            <div className="flex-1 text-center flex items-center justify-center">
              <p className="bg-green-400 w-24 rounded-md overflow-hidden">
                {noteValues.requiedAmount - total}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-lg">
            {currancyArray.map((item) => (
              <div className="flex justify-between " key={item.key}>
                <div className="flex-1 text-center flex items-center justify-center">
                  <p className="bg-green-400 w-24 rounded-md">{item.key}</p>
                </div>
                <input
                  className="w-24 text-center rounded-md"
                  value={noteValues[item.key]}
                  onChange={(e) => {
                    handleInputChange(item.key, e.target.value);
                  }}
                  type="number"
                  placeholder={item.key}
                />
                <div className="flex-1 text-center flex items-center justify-center">
                  <p className="bg-green-400 w-24 rounded-lg overflow-hidden">
                    {noteValues[item.key] * item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-2 text-xl text-center bg-green-500 font-bold text-red-600 rounded-md my-3">
            {total}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              className="bg-red-500 rounded-md w-20 h-10"
              onClick={resetValues}
            >
              Reset
            </button>
            <button
              className="bg-green-600 rounded-md w-20 h-10"
              onClick={getImage}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
