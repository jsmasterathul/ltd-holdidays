import { useContext, useState } from "react";
import authContext from "../../contexts/auth-context";
import { Popover, ArrowContainer } from "react-tiny-popover";
import {auth} from "../../config/firebase";

export default function Profile() {
  const { user } = useContext(authContext);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={isPopoverOpen}
      //   position={"bottom"} // if you'd like, you can limit the positions
      padding={10} // adjust padding here!
      reposition={true} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
      onClickOutside={() => setIsPopoverOpen(false)} // handle click events outside of the popover/target here!
      positions={["bottom"]}
      content={(
        { position, popoverRect, childRect } // you can also provide a render function that injects some useful stuff!
      ) => (
        <ArrowContainer
          position={position}
          popoverRect={popoverRect}
          childRect={childRect}
          arrowSize={12}
          arrowColor="#FEF3C7"
        >
          <div className="bg-yellow-100 p-4 flex flex-col gap-y-2 rounded-sm items-center" >
            <div className="cursor-pointer hover:text-yellow-500">My Orders</div>
            <div className="cursor-pointer hover:text-yellow-500">My Profile</div>
            <div className="cursor-pointer hover:text-red-500" onClick={e => auth.signOut() }>Logout</div>
          </div>
        </ArrowContainer>
      )}
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        {user.displayName}
      </div>
    </Popover>
  );
}
