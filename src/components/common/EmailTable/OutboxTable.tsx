import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Avatar,
  Box,
  Stack,
  Typography,
} from "@mui/material";

interface EmailMessage {
  status: "Not Delivered" | "Delivered" | "Opened";
  statusDate: string;
  userId: string;
  email: string;
  action: string;
  dateSent: string;
}

interface EmailTableProps {
  emails: EmailMessage[];
  search: string;
  setSearch: (search: string) => void;
}

const statusConfig = {
  "Not Delivered": { color: "#FEFCE8", textColor: "#9CA3AF", icon: "#EAB308" },
  Delivered: { color: "#EFF6FF", textColor: "#9CA3AF", icon: "#3B82F6" },
  Opened: { color: "#F9FAFB", textColor: "#9CA3AF", icon: "#6B7280" },
};

const OutboxTable: React.FC<EmailTableProps> = ({
  emails,
  search,
  setSearch,
}) => {
  const router = useRouter();

  const filteredEmails = emails.filter((email) =>
    email.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TableContainer
      sx={{
        minWidth: "100%",
        width: { xs: "270px", sm: "500px", md: "700px", lg: "100%" },
        overflowX: { xs: "scroll", md: "auto" },
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow
            sx={{ borderBottom: "1.5px solid #CACACA", textAlign: "center" }}
          >
            {[
              "Status",
              "Status Date",
              "User Id",
              "Email Address",
              "User Action",
              "Date Sent",
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
          <TableRow>
            <TableCell
              sx={{
                borderBottom: "none",
              }}
            />
          </TableRow>
          {filteredEmails.map((email, index, arr) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: index % 2 === 0 ? "#F9FAFB" : "#F3F4F6",
              }}
            >
              {/* Status Column */}
              <TableCell
                sx={{
                  textAlign: "center",
                  padding: "12px",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: statusConfig[email.status].color,
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontWeight: "light",
                    color: statusConfig[email.status].textColor,
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      backgroundColor: statusConfig[email.status].icon,
                      borderRadius: "3px",
                    }}
                  />
                  {email.status}
                </Box>
              </TableCell>

              <TableCell
                sx={{
                  textAlign: "center",
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: 600,
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                <b>{email.statusDate}</b>
              </TableCell>

              {/* User Id Column */}
              <TableCell
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar
                    src="/Images/Ads/profile.png"
                    sx={{ width: 24, height: 24 }}
                  />
                  <span>{email.userId}</span>
                </Stack>
              </TableCell>

              {/* Email Column */}
              <TableCell
                sx={{
                  textAlign: "center",
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: 600,
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                {email.email}
              </TableCell>

              {/* Message Content Column */}
              <TableCell
                sx={{
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: 600,
                  px: { xs: "6px", md: "12px" },
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                  textAlign: "center",
                }}
              >
                {email.action}
              </TableCell>

              {/* Date Column */}
              <TableCell
                sx={{
                  textAlign: "center",
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontSize="14px" fontWeight={600}>
                    {email.dateSent}
                  </Typography>
                  <span style={{ fontSize: "10px", color: "#9CA3AF" }}>
                    08:47am
                  </span>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OutboxTable;
