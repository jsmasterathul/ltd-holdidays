import { Button, TextField, Modal } from "@material-ui/core";
import { useState, useEffect } from "react";
import { storage } from "../../config/firebase";
import firebase from "firebase/app";
import UploadedFileList from "./uploaded-files";

const FileUpload = (props) => {
  const { setPickedFiles, pickedFiles } = props;

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [fileNameError, setFileNameError] = useState([]);
  const [uploadedIndexes, setUploadedIndexes] = useState([]);
  const [showUploadPhotos, setShowUploadedPhotos] = useState(true);

  const storageRef = storage.ref();

  useEffect(() => {
    // if (selectedFiles.length === 0) {
    //   setPreview(undefined);
    //   return;
    // }

    // console.log(selectedFiles);

    const objectUrl = selectedFiles.map((file) => {
      console.log(file);
      return URL.createObjectURL(file);
    });

    console.log(objectUrl);

    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFiles]);

  const setSelectFile = (e) => {
    setSelectedFiles((prevVal) => [...prevVal, ...Array.from(e.target.files)]);
  };

  const subscribeToUpload = (uploadTask, index) => {
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
        setUploadedIndexes((prevVal) => [...prevVal, index]);
      }
    );
  };

  const getFilePreviewWithUpload = () => {
    return (
      <div className="flex flex-col">
        {preview.map((fileUrl, index) => (
          <div className="flex flex-row space-x-4 my-8" key={index}>
            {" "}
            <div>
              <img src={fileUrl} className="w-32 h-32" />
            </div>{" "}
            <div>
              <TextField
                label="File Name"
                error={Boolean(fileNameError[index])}
                helperText={fileNameError[index] ? fileNameError[index] : ""}
                onChange={(e) => {
                  setFileNames((prevVal) =>
                    Object.assign([], prevVal, { [index]: e.target.value })
                  );
                  setFileNameError((prevVal) =>
                    Object.assign([], prevVal, { [index]: "" })
                  );
                }}
              ></TextField>
            </div>
            <div>
              {uploadedIndexes.indexOf(index) < 0 ? (
                <Button
                  onClick={(e) => {
                    console.log(fileNames[index]);
                    if (fileNames[index]) {
                      // console.log(selectedFiles[index].name.split(".").pop());
                      let fileExt = selectedFiles[index].name.split(".").pop();
                      console.log(`packages/${fileNames[index]}.${fileExt}`);
                      let uploadTask = storageRef
                        .child(`packages/${fileNames[index]}.${fileExt}`)
                        .put(selectedFiles[index]);
                      subscribeToUpload(uploadTask, index);
                    } else {
                      setFileNameError((prevVal) =>
                        Object.assign([], prevVal, {
                          [index]: "Name should not be empty.",
                        })
                      );
                    }
                  }}
                >
                  {" "}
                  Upload File
                </Button>
              ) : (
                <div>Done</div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <Modal
        open={showUploadPhotos}
        onClose={() => setShowUploadedPhotos(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="flex flex-col bg-gray-50">
          <div>
            <input type="file" multiple onChange={setSelectFile}></input>
          </div>
          {/* <button onClick={(e) => setShowUploadedPhotos(true)}>
        Show uploaded photos
      </button> */}

          {preview && getFilePreviewWithUpload()}

          <div>
            <UploadedFileList
              onFileSelect={setPickedFiles}
              pickedFiles={pickedFiles}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FileUpload;
