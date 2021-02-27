import { Button, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import SearchCategories from "../components/utils/search-categories";
import SearchInclusions from "../components/utils/search-inclusions";

export default function CreatePackage() {
  const [tripdetails, setTripdetails] = useState({});
  const [itinerary, setItinerary] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (selectedFiles.length === 0) {
        setPreview(undefined)
        return
    }

    console.log(selectedFiles);

    const objectUrl = URL.createObjectURL(selectedFiles)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFiles])


  const savePackage = () => {
    // itinerary is converted from an array to objects
    // because firebase does not support nested arrays.

    db.collection("packages").add({
      tripdetails: tripdetails,
      itinerary: { ...itinerary },
    });
  };

  const setItinerayFormValue = (e, dayIndex, itineraryitemIndex) => {
    setItinerary((prevVal) => {
      let enteredValue = {
        ...prevVal[dayIndex][itineraryitemIndex],
        [e.target.name]: e.target.value,
      };
      let changedItineraryArray = Object.assign([], prevVal[dayIndex], {
        [itineraryitemIndex]: enteredValue,
      });

      return Object.assign([], prevVal, {
        [dayIndex]: changedItineraryArray,
      });
    });
  };

  const getItineraryItemForm = (item, dayIndex, itineraryitemIndex) => (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <TextField
            label="time"
            name="time"
            value={
              itinerary[dayIndex][itineraryitemIndex].time
                ? itinerary[dayIndex][itineraryitemIndex].time
                : ""
            }
            onChange={(e) =>
              setItinerayFormValue(e, dayIndex, itineraryitemIndex)
            }
          ></TextField>
        </div>
        <div>
          <Button
            onClick={(e) => {
              setItinerary((prevVal) => {
                // delete the item at itemIndex from this array
                let tempItemsArray = prevVal[dayIndex];
                tempItemsArray = [
                  ...tempItemsArray.slice(0, itineraryitemIndex),
                  ...tempItemsArray.slice(itineraryitemIndex + 1),
                ];

                //   { [prevVal.length]: [{ time: null, description: null }] },
                return Object.assign([], prevVal, {
                  [dayIndex]: tempItemsArray,
                });
              });
            }}
          >
            delete
          </Button>
        </div>
      </div>

      <div className="w-full">
        <TextField
          label="item description"
          multiline
          fullWidth
          variant="outlined"
          rows={4}
          name="description"
          value={
            itinerary[dayIndex][itineraryitemIndex].description
              ? itinerary[dayIndex][itineraryitemIndex].description
              : ""
          }
          onChange={(e) =>
            setItinerayFormValue(e, dayIndex, itineraryitemIndex)
          }
        ></TextField>
      </div>
    </div>
  );

  const setSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFiles(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFiles(e.target.files[0]);
  };

  return (
    <div className="flex flex-col w-full sm:w-5/6 md:w-2/5 gap-y-8 items-center mx-auto p-4">
      <div className="w-full">
        <TextField
          label="Title"
          fullWidth
          onChange={(e) =>
            setTripdetails((prevVal) => ({ ...prevVal, title: e.target.value }))
          }
        ></TextField>
      </div>
      <div className="w-full">
        <TextField
          fullWidth
          multiline
          rows={7}
          label="description"
          variant="outlined"
          onChange={(e) =>
            setTripdetails((prevVal) => ({
              ...prevVal,
              description: e.target.value,
            }))
          }
        ></TextField>
      </div>
      <div className="ml-auto">
        <Button
          onClick={(e) =>
            setItinerary((prevVal) => [
              ...prevVal,
              [{ time: null, description: null }],
            ])
          }
        >
          Add Day to itinerary
        </Button>
      </div>
      {itinerary.map((dayInItinerary, index) => (
        <div
          className="flex flex-col w-full border border-solid border-gray-100 p-4"
          key={index}
        >
          <div key={index}>Day {index + 1}</div>
          <div className="ml-auto flex flex-row">
            <div>
              <Button
                onClick={(e) => {
                  setItinerary((prevVal) => {
                    return [
                      ...prevVal.slice(0, index),
                      ...prevVal.slice(index + 1),
                    ];
                  });
                }}
              >
                Delete Day
              </Button>
            </div>
            <div>
              {" "}
              <Button
                onClick={(e) => {
                  setItinerary((prevVal) => {
                    let temp = prevVal[index];
                    temp = [...temp, { time: null, description: null }];

                    return Object.assign([], prevVal, {
                      [index]: temp,
                    });
                  });
                }}
              >
                Add another item
              </Button>
            </div>
          </div>
          {dayInItinerary.map((item, itemIndex) => (
            <div key={itemIndex}>
              {getItineraryItemForm(item, index, itemIndex)}
            </div>
          ))}
        </div>
      ))}
      <div className="w-full">
        <SearchCategories />
      </div>
      <div className="w-full">
        <SearchInclusions />
      </div>
      <div className={"w-full flex flex-row space-x-3"}>
        <div className={"w-2/4"}>
          <TextField label="Price"></TextField>
        </div>
        <div className={"w-1/4"}>
          <TextField label="Days"></TextField>
        </div>
        <div className={"w-1/4"}>
          <TextField label="Nights"></TextField>
        </div>
      </div>
      <div className="w-full">
        <input type="file" multiple onChange={setSelectFile}></input>
        {preview &&  <img src={preview} /> }
      </div>
      <div className="flex ml-auto">
        <div>
          <Button onClick={savePackage} onChange={setSelectFile}>
            Save package
          </Button>
        </div>
        <div>
          <Button>Publish package</Button>
        </div>
      </div>
    </div>
  );
}
