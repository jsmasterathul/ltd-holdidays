import { getFormattedCurrency } from "../utils/index";
import classes from "./popular-packages.module.css";
import { useState } from "react";
export default function PopularPackages() {
  const data = [
    {
      titleOnImg: "Munnar | 3N/4D",
      title: "Soul of Munnar ",
      subTitle: "Munnar + Kolukkumalai",
      price: "33455",
      max_price: "36999",
      // rating: "5.0",
      // reviews: "2000",
      imgSrc: "/images/packages/Soul_of_Munnar.jpg",
    },
    {
      titleOnImg: "Kerala | 3N/4D",
      title: "Honeymoon Delight",
      subTitle: "Munnar + Alleppey + Cochin",
      price: "34555",
      max_price: "38200",
      // rating: "5.0",
      // reviews: "2120",
      imgSrc: "/images/packages/Honeymoon_Delight.jpg",
    },
    {
      titleOnImg: "Alleppey | 1N/2D",
      title: "Just Cruise",
      subTitle: "Backwater Cruise + Overnight stay in Private Deluxe Houseboat",
      price: "7000",
      max_price: "8000",
      imgSrc: "/images/packages/Just_Cruise.jpg",
    },
    {
      titleOnImg: "Kerala | 3N/4D",
      title: "Trip to the tip",
      subTitle: "Trivandrum + Kanyakumari + Kovalam",
      price: "27350",
      max_price: "31180",
      imgSrc: "/images/packages/Trip_to_the_Tip.jpg",
    },
    {
      titleOnImg: "Wayanad | 2N/3D",
      title: "Wonders of Wayanad",
      subTitle: "Wayanad Tour",
      price: "19850",
      max_price: "22300",
      imgSrc: "/images/packages/Wonders_of_Wayanad.jpg",
    },
    {
      titleOnImg: "Kerala | 1N/2D",
      title: "Weekend Getaway",
      subTitle: "Cochin + Alleppey",
      price: "14450",
      max_price: "16600",

      imgSrc: "/images/packages/Weekend_Getaway.jpg",
    },
    {
      titleOnImg: "Kerala | 4N/5D",
      title: "Budget Kerala",
      subTitle: "Cochin + Munnar + Thekkady + Alleppey",
      price: "28200",
      max_price: "31500",
      imgSrc: "/images/packages/Budget_Kerala.jpg",
    },
    {
      titleOnImg: "Kerala | 5N/6D",
      title: "Tourists' Roundabout",
      subTitle: "Cochin + Munnar + Thekkady + Vagamon + Alleppey",
      price: "44400",
      max_price: "48999",

      imgSrc: "/images/packages/Tourists_roundabout.jpg",
    },
    {
      titleOnImg: "Munnar | 2N/3D",
      title: "Budget Munnar",
      subTitle: "Munnar Sightseeing",
      price: "16250",
      max_price: "19300",

      imgSrc: "/images/packages/Budget_Munnar.jpg",
    },
  ];

  const [showToolTip, setShowToolTip] = useState(false);
  return (
    <div className="mb-4 mt-4">
      <div className=" text-center mt-4 mb-4 border-0 border-l-8 border-yellow-500 bg-yellow-100 p-4 rounded-md">
        <span className="text-gray-700 font-light text-2xl md:text-3xl">
          Top Rated Packages
          <br></br>
          <p className="text-gray-500 text-lg">Upto 30% Off</p>
        </span>
      </div>
      <div
        className={`${classes.scrollbarhorizontal} overflow-x-auto overflow-y-hidden w-full m-auto whitespace-nowrap  `}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className=" inline-block  m-2 align-top cursor-pointer transition-all ease-in-out scale-100 duration-500 transform hover:scale-105"
          >
            <div className={`relative w-80 h-96 rounded-md  overflow-hidden `}>
              <div
                className={`absolute w-full p-3 align-middle text-left w-30 bottom-2 bg-gray-800 bg-opacity-30`}
              >
                <p className="text-white  font-medium">{item.titleOnImg}</p>
              </div>

              <img src={item.imgSrc} className="w-full h-full rounded-md" />
            </div>
            <div className="p-3 block w-80  ">
              <p className="font-medium  ">{item.title}</p>
              {/* {item.rating && (
                <p className="text-sm text-gray-500">
                  {" "}
                  {item.rating} ( {item.reviews} reviews)
                </p>
              )} */}

              {item.subTitle && (
                <div className="relative">
                  <p
                    className="text-sm text-gray-500  overflow-hidden  break-words max-w-80 pb-1"
                    onMouseEnter={() => setShowToolTip(index)}
                    onMouseLeave={() => setShowToolTip(false)}
                  >
                    {" "}
                    {item.subTitle.length > 45
                      ? `${item.subTitle.substring(0, 45)} ...`
                      : item.subTitle}
                  </p>
                  {item.subTitle &&
                    item.subTitle.length > 45 &&
                    showToolTip === index && (
                      <p className="absolute bottom-5 right-1 bg-gray-500 pl-2 pr-2 text-sm text-white">
                        {" "}
                        {item.subTitle}
                      </p>
                    )}
                </div>
              )}

              {item.price && (
                <p className="font-medium inline">
                  {getFormattedCurrency(item.price)} &nbsp;{" "}
                </p>
              )}
              {item.max_price && (
                <p className="font-sm text-sm text-gray-500 inline">
                  <s>{getFormattedCurrency(item.max_price)}</s>&nbsp;{" "}
                </p>
              )}
              {item.price && (
                <p className="font-sm text-sm  inline">( For a Couple )</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
