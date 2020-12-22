export default function SummaryGrid() {
  const gridItem = (title, imageUrl, subTitle) => (
    <div className="flex-col space-y-2">
      <div className="font-extrabold text-white text-4xl">{title}</div>
      <div className="w-14 h-14 ml-auto mr-auto">
        <img src={imageUrl} className="object-center w-14 h-14"></img>
      </div>
      <div className="font-extralight text-white text-xl"> {subTitle}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 ml-auto mx-auto bg-yellow-500 bg-opacity-50">
      <div className="p-8">
        {gridItem("1000+", "/images/white-icons/happy.png", "Satisfied Customers")}
      </div>
      <div className="p-8 font-extrabold">{gridItem("7000+", "/images/white-icons/hotel.png", "Hotel Tie Ups")}</div>
      <div className="p-8">{gridItem("1000+", "/images/white-icons/destinations.png", "Travel Destinations")}</div>
      <div className="p-8"> {gridItem("BEST", "/images/white-icons/value.png", "Value For Money")}</div>
    </div>
  );
}
