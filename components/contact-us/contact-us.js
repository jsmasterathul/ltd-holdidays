import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import { useState } from "react";
// import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function WhatsAppContactUs({
  currentTarget,
  setCurrentTarget,
  message,
}) {
  const classes = useStyles();
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const prevTarget = useRef();

  //   useEffect(()=>{
  //       if( anchorEl == null){
  //         setAnchorEl(currentTarget);

  //       }
  //       prevTarget.current = currentTarget;
  //   });

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   setAnchorEl(currentTarget);

  const handleClose = () => {
    setCurrentTarget(null);
  };

  const open = Boolean(currentTarget);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {/* <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Popover
      </Button> */}
      <Popover
        id={id}
        open={open}
        anchorEl={currentTarget}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="flex flex-col p-8">
          <Typography className={classes.typography}>
            Our site is under construction, please send us your enquiry throug
            whatsapp or call us!
          </Typography>
          <div className="ml-auto">
            <div className="flex flex-row gap-5">
              <div>
                {" "}
                <Button
                variant="outlined"
                color="secondary"
                  onClick={(e) => {
                    window.open('tel:+918197244462');
                  }}
                >
                  Call us +91 8197244462
                </Button>
              </div>
              <div>
              <Button
              variant="contained"
              startIcon={<WhatsAppIcon/>}
              color="primary"
                  onClick={(e) => {
                    window.open(
                      `https://api.whatsapp.com/send?phone=918197244462&text=${message}`,
                      "_blank"
                    );
                  }}
                >
                  Whats App Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}
