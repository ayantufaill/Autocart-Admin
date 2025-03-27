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

export interface EmailMessage {
  status: "Read" | "Unread";
  userId: string;
  email: string;
  content: string;
  date: string;
}

interface EmailTableProps {
  emails: EmailMessage[];
  search: string;
  setSearch: (search: string) => void;
}

const statusConfig = {
  Read: { color: "#F9FAFB", textColor: "#9CA3AF", icon: "#6B7280" },
  Unread: { color: "#FEF2F2", textColor: "#9CA3AF", icon: "#EF4444" },
};

const EmailTable: React.FC<EmailTableProps> = ({
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
        width: { xs: "210px", sm: "490px", md: "650px", lg: "95%" },
        overflowX: { xs: "scroll", md: "auto" },
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ borderBottom: "1.5px solid #CACACA" }}>
            {[
              "Status",
              "User Id",
              "Email Address",
              "Message Content",
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

              {/* User Id Column */}
              <TableCell
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  borderLeft: "0.5px solid #CACACA",
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
                }}
              >
                {email.email}
              </TableCell>

              {/* Message Content Column */}
              <TableCell
                sx={{
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: 400,
                  px: { xs: "6px", md: "12px" },
                }}
              >
                <Stack
                  gap={{ xs: 1, lg: 0 }}
                  direction={{ xs: "column", lg: "row" }}
                  justifyContent={{ xs: "start", lg: "space-between" }}
                  alignItems={{ xs: "start", lg: "center" }}
                >
                  <Typography fontSize="14px">{email.content}</Typography>
                  <span style={{ fontSize: "10px" }}>08:47am</span>
                </Stack>
              </TableCell>

              {/* Date Column */}
              <TableCell
                sx={{
                  textAlign: "center",
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: 600,
                }}
              >
                <b>{email.date}</b>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmailTable;
