const ReviewCard = (props) => {
  const {review} = props;

  const getAvatar = () => (
    <div className="flex justify-end align-middle">
      <img src={review.avatarURL} className="rounded-full"/>
      <div className="flex flex-col justify-center align-middle ml-1">
        <div className="font-bold">{review.author}</div>
        <div className="text-gray-400">{review.authorLocation}</div>
      </div>
    </div>
  );

  return (
    <div className=" flex flex-col md:flex-row my-8 border-gray-100 border-solid border-2 rounded-lg">
      <div className="border-yellow-500 border-l-8  p-4 flex flex-col w-full md-w-10/12">
        <div className="text-2xl">{review.title}</div>
        <div className="text-lg text-gray-400 my-2">
          {review.desccription}
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
        <div className="text-xl">{review.nights}</div>
      </div>
    </div>
  );
};

export default function Riview() {
  const reviews = [
    {
      title: "Very professional and kind people!!",
      desccription: `
      I have an amazing experience with the this travel group.
      They find the best home stays, best hotels and best of everything.
      Whenever I am planning a trip I always choose "Live the day "!!
      You guys Rock !! 💘💘💘`,
      author: "DIVYA KANWAR",
      nights:"3",
      authorLocation:"Himachal Pradesh",
      avatarURL:"images/avatars/Div.jpg"
    },
    {
      title: "Our trusted partner",
      desccription: `The first time I hired them was to book Mauritius honeymoon package. 
      It was so good. Loved the stay and the trip planned. 
      Based on your budget you can customize your holiday with. 
      They will provide you with the best options for the budget. 
      Since then I have only employed them for my holiday planning. 
      Loved the service. Keep up the good work.`,
      author: "JISHANT VARGHESE",
      nights:"8",
      authorLocation:"Trivanderum",
      avatarURL:"images/avatars/Jish.jpg"
    },
    {
      title: "100% Recommended",
      desccription: `We recently got our honeymoon package from Live the day holidays.
      I must say that it was our best decision to engage live the day holidays for our trip planning.
      Even in the current pandemic scenario, our trip was well planned and safely executed.
      All thanks to Our travel planner Chinthu. He was extremely friendly and helpful.
      We got the best resorts with finest deals than booking online site. We would highly recommend them to everyone.`,
      author: "ASHLY RAJU",
      nights:"",
      authorLocation:"Kochi",
      avatarURL:"images/avatars/Ashly.jpg"
    }
  ]
  return (
    <div className="flex-col">
    {
      reviews.map(review =>  <div><ReviewCard review={review}/></div>)
    }
     
    </div>
  );
}
