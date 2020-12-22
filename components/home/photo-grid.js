import classes from "./photo-grid.module.css";

export default function PhotoGrid() {
  return (
    <div
      className={`grid grid-cols-3 grid-flow-row gap-2 ${classes.gridRoot}`}
    >
      <div className="row-span-2 rounded-md">
        <img src="/images/packages/kerala.png" className="w-full h-full rounded-xl" />
      </div>
      <div className="rounded-md">
        <img src="/images/packages/honeymoon.png" className="w-full h-full rounded-xl" />
      </div>
      <div className="row-span-2 rounded-md">
        <img
          src="/images/packages/international.png"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="rounded-md">
        <img src="/images/packages/luxury.png" className="w-full h-full rounded-xl" />
      </div>
      <div className="col-span-2 row-span-3">
        <img src="/images/packages/houseboat.png" className="w-full h-full rounded-xl" />
      </div>
      <div>
        <img
          src="/images/packages/experimental.png"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div>
        <img src="/images/packages/beach.png" className="w-full h-full rounded-xl" />
      </div>

      <div>
        <img src="/images/packages/experience.png" className="w-full h-full rounded-xl" />
      </div>
    </div>
  );
}
