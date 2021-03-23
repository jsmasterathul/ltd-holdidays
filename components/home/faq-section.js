import { useState, useRef } from "react";

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState(null);
  const faqDescriptionRef = useRef(null);

  const faqData = [
    {
      title: "Why should I choose a travel agent ?",
      description:
        "It saves you a lot of your time and if you are finding a good agent it will definitely help you save a good amount of money as well. You will be receiving clear and precise information regarding many things when you prefer an agent. Surfing in the internet for information and patching it together will be a tough job to do and there is always a chance that you might miss something important. If your travel agent is a trustable contact, choosing him over self planning will the best option.        ",
    },
    {
      title: "Why LiveTheDay ?",
      description:
        "Our happy clients and their reviews are the answers for this question. Besides, we have great tie ups with all the good hotel chains across the globe. We are experienced campaigners and have been in the field for around the past 7 years. Our team helps you to customise the tour to any extend and there will be a personal travel coordinator assigned for you who will be in touch with you throughout the trip.",
    },
    {
      title: "What Services Do We Offer ? ",
      description:
        "We are a one stop travel shop for all your travel related services for any occasion. Be it a business travel or a leisure trip, we can extend our support to make it hassle free and memorable. We specialise in incentive tours, honeymoons, health tourism, family outings, corporate get togethers, adventure tours or any special interest tours anywhere around the globe. ",
    },
    {
      title: "Do You Provide Only All Inclusive Package Tours ? ",
      description:
        "Though we are mostly approached for full package services, we can also provide separate rates for services like hotel reservation, car/coach hire with driver, flight tickets, visa services, travel insurance, certificate attestation etc. ",
    },
    {
      title: "Will I Know Which Hotels I Will Be Staying in Before I Go ? ",
      description:
        "Yes, we will send you a list of different hotels during the time of discussion. You can choose the hotel according to your budget and requirements. Once it’s finalised, we will block the rooms for you even before you make an advance payment.",
    },
    {
      title: "What about Payment Terms ? ",
      description:
        "We normally need an advance amount to confirm you the arrangements for the tour. The amount depends on the services you may require for the tour. This can be paid through bank transfer or credit card (Card payment is 3 percent extra chargeable). For International and north east India tours, the full amount should be paid before arrival. For South Indian tours, an advance can be paid and the remaining amount can be paid after reaching the destination. The exact terms of the cancellation policy will be given at the time of reservation as it depends on the place of travel and the cancellation policies of hotels we choose. ",
    },
  ];

  return (
    <div className="md:w-3/4  block m-auto mb-10 mt-10">
      <div className="border-primary border-b-4 pb-3 w-1/5 m-auto mb-4">
        <h2 className="text-center text-4xl text-gray-700 tracking-wide ">
          FAQ
        </h2>
      </div>

      {faqData.map((faq, index) => (
        <div
          key={index}
          className={` border-primary  border-t-2  ${
            index + 1 === faqData.length ? `border-b-2` : ""
          } `}
        >
          <div
            onClick={() => {
              if (activeTab === index) {
                setActiveTab(null);

                // faqDescriptionRef.current.style.maxHeight = `${faqDescriptionRef.current.scrollHeight}px`;
              } else {
                setActiveTab(index);

                // faqDescriptionRef.current.style.maxHeight = `${faqDescriptionRef.current.scrollHeight}px`;
              }
              console.log("fds", faqDescriptionRef);
            }}
            className=" p-3 cursor-pointer"
          >
            <p className="text-l  lg:text-xl text-black hover:text-primary  ">
              {faq.title}
            </p>
          </div>
          <div
            ref={faqDescriptionRef}
            className={`relative overflow-hidden transition-all ease-in-out max-h-0 duration-550`}
            style={
              activeTab !== null && index === activeTab
                ? { maxHeight: `${faqDescriptionRef.current.scrollHeight}px` }
                : { maxHeight: "0px" }
            }
          >
            <div className="p-4">
              <p className="text-lg text-gray-500">{faq.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
