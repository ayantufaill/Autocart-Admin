import { Box, Container } from "@mui/material";
import React from "react";
import UserDetails from "../../Users/UserDetails";
import EmailDisplay from "../EmailDisplay";
import InboxHeader from "../inbox/InboxHeader";

const configStatus = {
  Read: "#9CA3AF",
  Unread: "#EF4444",
};

interface InboxProps {
  status: "Read" | "Unread";
}

const mailContent = [
  "Lorem ipsum dolor sit amet consectetur. Metus duis augue massa non. Sollicitudin cursus id sit leo sed arcu nam libero elit. Ultrices tincidunt morbi eleifend ut nunc vitae. Elementum luctus aliquam sed a sed a morbi nunc facilisi. Adipiscing egestas nunc interdum fusce. Congue faucibus eget ullamcorper vel sem. Erat in purus tincidunt risus laoreet fusce. Nunc semper pulvinar mauris duis varius turpis tempus. Tempus amet cursus morbi duis pellentesque orci diam integer.",
  "Egestas volutpat elit lacus risus magna at. Dictumst aliquam vulputate augue aliquet amet nibh aliquam et. Urna quis faucibus odio in mauris volutpat. Blandit etiam viverra dictum donec tristique pulvinar sit consectetur et. Eget tellus imperdiet orci dui pharetra neque duis quam. Amet lorem facilisi enim at sit proin justo nisl elementum. Tincidunt odio vitae non fermentum ultricies varius. Morbi nec nisl maecenas risus orci a. Eu lacus tristique eleifend sapien id vulputate. Sagittis consectetur non quam facilisi urna adipiscing eget. Posuere placerat maecenas nunc eu viverra malesuada. Eu adipiscing ut dolor fames velit nullam eget diam.",
];

const InboxOpened: React.FC<InboxProps> = ({ status }) => {
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Container sx={{ py: 3 }}>
        {/* Header */}
        <InboxHeader
          title={status}
          color={configStatus[status]}
          forwardPath="/"
          replyPath="/"
        />
        {/* Mail */}
        <EmailDisplay
          subject="Report on a glitch that Occurred on the app"
          content={mailContent}
        />
        {/* Details */}
        <UserDetails status="ACTIVE" userData={null} />
      </Container>
    </div>
  );
};

export default InboxOpened;
