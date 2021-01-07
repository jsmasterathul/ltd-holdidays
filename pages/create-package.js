import { Button, TextField } from "@material-ui/core";

export default function CreatePackage() {
  return (
      <div className="flex flex-col w-full sm:w-5/6 md:w-2/5 gap-y-8 items-center mx-auto p-4">
        <div className="w-full">
          <TextField label="Title" fullWidth></TextField>
        </div>
        <div className="w-full">
          <TextField
          fullWidth
            multiline
            rows={7}
            label="description"
            variant="outlined"
          ></TextField>
        </div>
        <div className="ml-auto">
            <Button>Add itinerary</Button>
        </div>
      </div>
  );
}
