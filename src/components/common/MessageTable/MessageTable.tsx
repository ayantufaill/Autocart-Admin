import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  TextField,
  Avatar,
  InputAdornment,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";

export interface Message {
  status: "Flagged" | "Reported";
  SenderId: string;
  ReceiverId: string;
  MessageContent: string;
  Reason: string;
  Date: string;
}

interface MessagesTableProps {
  Messages: Message[];
  search: string;
  setSearch: (search: string) => void;
}

const statusConfig = {
  Reported: { color: "#FEF2F2", textColor: "#B4B7C0", icon: "#EF4444" },
  Flagged: { color: "#FEFCE8", textColor: "#D97706", icon: "#EAB308" },
};

const MessagesTable: React.FC<MessagesTableProps> = ({
  Messages,
  search,
  setSearch,
}) => {
  const router = useRouter();

  const filteredMessages = Messages.filter((message) =>
    message.SenderId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TableContainer
        sx={{
          minWidth: "100%",
          width: { xs: "270px", sm: "500px", md: "700px", lg: "100%" },
          overflowX: { xs: "scroll", md: "auto" },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ borderBottom: "1.5px solid #CACACA" }}>
              {[
                "Status",
                "Sender Id",
                " Receiver Id",
                "Message Content",
                "Reason",
                "Date",
              ].map((header, index) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: 600,
                    textAlign: "center",
                    backgroundColor: "#F3F4F6",
                    color: "#9CA3AF",
                    borderLeft: index === 0 ? "0px" : "0.5px solid #CACACA",
                    borderBottom: "none",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Empty Row to add gap */}
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "transparent",
                  borderBottom: "0px",
                }}
              />
            </TableRow>
            {filteredMessages.map((message, index, arr) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#F3F4F6",
                }}
              >
                <TableCell
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                  }}
                  onClick={() => {
                    router.push(
                      "/admin/messagemanagement/" +
                        message.status.toLowerCase() +
                        "/opened"
                    );
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      backgroundColor: statusConfig[message.status].color,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontWeight: "light",
                      color: statusConfig[message.status].textColor,
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                      "&:hover": { opacity: 0.8 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: statusConfig[message.status].icon,
                        borderRadius: "3px",
                      }}
                    />
                    {message.status}
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    borderLeft: "0.5px solid #CACACA",
                  }}
                >
                  <Stack
                    direction={{ xs: "column", lg: "row" }}
                    alignItems={"center"}
                    spacing={1}
                  >
                    <Avatar
                      src="/Images/Ads/profile.png"
                      sx={{ width: 24, height: 24 }}
                    />
                    <span>{message.SenderId}</span>
                  </Stack>
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    borderLeft: "0.5px solid #CACACA",
                    fontWeight: 600,
                  }}
                >
                  <Stack
                    direction={{ xs: "column", lg: "row" }}
                    alignItems={"center"}
                    spacing={1}
                  >
                    <Avatar
                      src="/Images/Ads/profile.png"
                      sx={{ width: 24, height: 24 }}
                    />
                    <span>{message.ReceiverId}</span>
                  </Stack>
                </TableCell>

                <TableCell
                  sx={{
                    borderLeft: "0.5px solid #CACACA",
                    fontWeight: 400,
                    px: { xs: "6px", md: "12px" },
                  }}
                >
                  <Stack
                    direction={{ xs: "column", lg: "row" }}
                    justifyContent={{ xs: "start", md: "center" }}
                    alignItems={{ xs: "start", md: "center" }}
                    spacing={{ xs: 1, md: 2 }}
                  >
                    <Typography fontSize="14px">
                      {message.MessageContent}
                    </Typography>
                    <span style={{ fontSize: "10px" }}>08:47am</span>
                  </Stack>
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    borderLeft: "0.5px solid #CACACA",
                    fontWeight: 600,
                  }}
                >
                  {message.Reason}
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "center",
                    borderLeft: "0.5px solid #CACACA",
                    fontWeight: 600,
                  }}
                >
                  {message.Date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MessagesTable;
