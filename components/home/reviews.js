const ReviewCard = (props) => {
  const getAvatar = () => (
    <div className="flex justify-end align-middle">
      <img src="images/avatars/avatarpreview.png" />
      <div className="flex flex-col justify-center align-middle ml-1">
        <div className="font-bold">Varsha Motwani</div>
        <div className="text-gray-400">Mumbai</div>
      </div>
    </div>
  );

  return (
    <div className=" flex flex-col md:flex-row my-8 border-gray-100 border-solid border-2 rounded-lg">
      <div className="border-yellow-500 border-l-8  p-4 flex flex-col w-full md-w-10/12">
        <div className="text-2xl">Bliss bliss bliss!</div>
        <div className="text-lg text-gray-400 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo
          vero iste explicabo, dolorum ipsam facilis recusandae nulla, provident
          deleniti sint doloremque ad nam eveniet pariatur ea corporis
          accusantium consectetur.
        </div>
        <div className="ml-auto">{getAvatar()}</div>
      </div>
      <div className="flex flex-col  items-center justify-center bg-gray-100 w-full md:w-2/12 ">
        {" "}
        <div className="text-center content-center">
          <div className="flex">
            <div>
              <img src="images/svgs/moon.svg" className="w-4 h-4" />
            </div>
            <div className="font-semibold">Nights</div>
          </div>
        </div>
        <div className="text-xl">5</div>
      </div>
    </div>
  );
};

export default function Riview() {
  return (
    <div className="flex-col">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
}
