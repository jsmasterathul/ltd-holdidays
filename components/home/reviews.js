const ReviewCard = (props) => (
  <div className="border-yellow-500 border-l-8 flex my-8">
    <div className="w-10/12 p-4 flex-col">
      <div className="text-2xl">Bliss bliss bliss!</div>
      <div className="text-lg text-gray-400 my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo
        vero iste explicabo, dolorum ipsam facilis recusandae nulla, provident
        deleniti sint doloremque ad nam eveniet pariatur ea corporis accusantium
        consectetur.
      </div>
    </div>
    <div> Side content will come here.</div>
  </div>
);

export default function Riview() {
  return (
    <div className="flex-row">
      <ReviewCard />
    </div>
  );
}
