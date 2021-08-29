import { useState } from "react";
import WhatsAppContactUs from "../contact-us/contact-us";
import classes from "./photo-grid.module.css";

export default function PhotoGrid() {
  const data = [
    {
      title: "Kerala Packages",
      rowSpan: 2,
      imgSrc: "/images/packages/beach.png",
    },
    {
      title: "Honeymoon Packages",
      colSpan: null,
      imgSrc: "/images/packages/honeymoon.png",
    },
    {
      title: "International Tours",
      rowSpan: 2,
      colSpan: null,
      imgSrc: "/images/packages/international.png",
    },
    {
      title: "Luxury \n Stays",
      imgSrc: "/images/packages/luxury.png",
    },
    {
      title: "Houseboat Cruises",
      rowSpan: 3,
      colSpan: 2,
      imgSrc: "/images/packages/houseboat.png",
    },
    {
      title: "Experiential Hotels",

      imgSrc: "/images/packages/experimental.png",
    },
    {
      title: "Beach Destinations",

      imgSrc: "/images/packages/beach.png",
    },
    {
      title: "Book Experiences",

      imgSrc: "/images/packages/experience.png",
    },
  ];

  const [clickedItem, setClickedItem] = useState(null);

  return (
    <>
      <div
        className={` grid-cols-3 grid-flow-row gap-2 hidden  lg:grid ${classes.gridRoot} cursor-pointer `}
      >
        {data.map((item, index) => (
          <div
            key={index}
            onClick={(e) =>
              setClickedItem({
                currentTarget: e.currentTarget,
                message: `I am intrested in ${item.title}`,
              })
            }
            className={`relative ${
              item.rowSpan ? `row-span-${item.rowSpan}` : ""
            } ${
              item.colSpan ? `col-span-${item.colSpan}` : ""
            }   rounded-md  overflow-hidden`}
          >
            <div
              className={`absolute text-center w-full bottom-2 bg-gray-800 bg-opacity-30`}
            >
              <p className="font-cursive text-7xl text-white  font-medium">
                {item.title}
              </p>
            </div>

            <img src={item.imgSrc} className="w-full h-full rounded-md" />
          </div>
        ))}
      </div>
      <div
        className={`grid grid-cols-2  md:grid-cols-3 grid-flow-row gap-1 lg:hidden`}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-md  overflow-hidden z-0`}
          >
            <div
              className={`absolute text-center w-full bottom-2 bg-gray-800 bg-opacity-30`}
            >
              <p className="font-cursive text-4xl text-white  font-medium">
                {item.title}
              </p>
            </div>

            <img src={item.imgSrc} className="w-full h-full rounded-md" />
          </div>
        ))}
      </div>

      <WhatsAppContactUs
        currentTarget={clickedItem ? clickedItem.currentTarget : null}
        setCurrentTarget={setClickedItem}
        message={clickedItem ? clickedItem.message : null}
      />

      {/* 
      <div className=" relative row-span-2 rounded-md ">
        <div className="absolute text-center w-full bottom-2">
          <p className="font-cursive text-8xl text-white ">Kerala Packages</p>
        </div>

        <img
          src="/images/packages/kerala.png"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="rounded-md">
        <img
          src="/images/packages/honeymoon.png"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="row-span-2 rounded-md">
        <img
          src="/images/packages/international.png"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="rounded-md">
        <img
          src="/images/packages/luxury.png"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="col-span-2 row-span-3">
        <img
          src="/images/packages/houseboat.png"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div>
        <img
          src="/images/packages/experimental.png"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div>
        <img
          src="/images/packages/beach.png"
          className="w-full h-full rounded-xl"
        />
      </div>

      <div>
        <img
          src="/images/packages/experience.png"
          className="w-full h-full rounded-xl"
        />
      </div> */}
    </>
  );
}
