import Head from "next/head";
import styles from "../styles/Home.module.css";


import Layout from "../components/layout";
import Summary from "../components/home/summary-grid";
import PhotoGrid from "../components/home/photo-grid";
import Reviews from "../components/home/reviews";

import { db } from "../config/firebase";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import FaqSection from "../components/home/faq-section";
import PopularPackages from "../components/home/popular-packages";

export default function Home() {
  return (
    <Layout>
      <div className="bg-home1 h-screen bg-cover bg-center bg-no-repeat flex justify-items-center items-center text-center">
        <Summary />
      </div>
      <div className="flex-col w-11/12 md:w-9/12 lg:w-8/12 ml-auto mr-auto align-middle gap-y-4">
        <div className=" text-center mt-4 mb-4 border-0 border-l-8 border-yellow-500 bg-yellow-100 p-4 rounded-md">
          <span className="text-gray-700 font-light text-2xl md:text-3xl ">
            Handcrafted Packages for the explorer inside you!
          </span>
          <br />
          <span className="text-gray-500 font-light text-l md:text-xl">
            Explore like never before.
          </span>
        </div>
        <PhotoGrid />
        <Reviews />
        <FaqSection />
        <PopularPackages />
      </div>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css"
      />
      <style>


      </style>

    </Layout>
  );
}
