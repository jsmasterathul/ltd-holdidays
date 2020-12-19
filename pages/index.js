import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="py-20">
      <h1 className="text-center text-xs dark:text-gray-100">
        Next.js + Tailwind CSS 2.0
      </h1>
      <button className="button button--action"> hello </button>
    </div>
  );
}
