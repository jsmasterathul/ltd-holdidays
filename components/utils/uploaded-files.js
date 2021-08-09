import React from "react";
import { Checkbox } from "@material-ui/core";

import { list } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useState } from "react";
import { useEffect } from "react";

const listRef = storage.ref().child("packages");

const UploadedFileList = ({ onFileSelect }) => {
  const [imageDetails, setImageDetails] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    async function pageTokenExample() {
      // Create a reference under which you want to list

      // Fetch the first page of 100.
      const firstPage = await listRef.list({ maxResults: 100 });
      //get the urls
      let promiseUrls = firstPage.items.map(async function (imageRef) {
        let url = await imageRef.getDownloadURL();
        return url;
      });
      let urls = await Promise.all(promiseUrls);
      // get the names
      let metadatas = [];
      let promiseMetadata = firstPage.items.map((itemRef) =>
        itemRef.getMetadata()
      );
      metadatas = await Promise.all(promiseMetadata);
      // create an object with url n metadata
      console.log("HEre", metadatas);
      let imageDetailsdata = metadatas.map((metadata, index) => {
        return {
          url: urls[index],
          metadata,
        };
      });
      setImageDetails(imageDetailsdata);
      //   setResultSet(firstPage);
    }

    pageTokenExample();
  }, []);
  // TODO: implement pagination.
  //   async function fetchNextResultSet() {
  //     if (imageUrls.nextPageToken) {
  //       const nextResults = await listRef.list({ maxResults: 100});
  //       setImageUrls(nextResults);
  //     }
  //   }

  useEffect(() => {
    if (onFileSelect) {
      onFileSelect(selectedFiles);
    }
  }, [selectedFiles]);

  return (
    <div className="flex flex-col">
      {console.log("image details", imageDetails)}
      {imageDetails.length > 0 ? (
        <>
          {imageDetails.map((imageDetail, index) => (
            <div className="flex flex-row bg-gray-50">
              <div key={index} className="w-1/6 h-1/6 my-4">
                {" "}
                <img src={imageDetail.url}></img>
              </div>{" "}
              <div className="self-center mx-5">
                {imageDetail.metadata.name}
              </div>
              <div className="self-center mx-5">
                <Checkbox
                  checked={
                    selectedFiles.indexOf(imageDetail.metadata.name) != -1
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedFiles((prevVal) => [
                        ...prevVal,
                        imageDetail.metadata.name,
                      ]);
                    } else {
                      setSelectedFiles(
                        selectedFiles.filter(
                          (e) => e !== imageDetail.metadata.name
                        )
                      );
                    }
                  }}
                  name="checkedB"
                  color="primary"
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>Fetching images..</div>
      )}
      {selectedFiles.length > 0 && <div> {selectedFiles.length} selected</div>}
    </div>
  );
};

export default UploadedFileList;
