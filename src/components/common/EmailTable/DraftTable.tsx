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
  userId: string;
  email: string;
  content: string;
  dateSaved: string;
  daysInDraft: number;
}

interface EmailTableProps {
  emails: EmailMessage[];
  search: string;
  setSearch: (search: string) => void;
}

const DraftTable: React.FC<EmailTableProps> = ({
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
          <TableRow sx={{ borderBottom: "1.5px solid #CACACA" }}>
            {[
              "User Id",
              "Email Address",
              "Message Content",
              "Date Saved",
              "Days in draft",
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
              {/* User Id Column */}
              <TableCell
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
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
                  fontWeight: 500,
                  px: { xs: "6px", md: "12px" },
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                {email.content}
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
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Typography fontSize="14px" fontWeight={600}>
                    {email.dateSaved}
                  </Typography>
                  <span style={{ fontSize: "10px", color: "#9CA3AF" }}>
                    08:47am
                  </span>
                </Stack>
              </TableCell>
              {/* Days in draft */}
              <TableCell
                sx={{
                  borderLeft: "0.5px solid #CACACA",
                  fontWeight: 600,
                  px: { xs: "6px", md: "12px" },
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                  minWidth: "120px",
                  textAlign: "center",
                }}
              >
                {email.daysInDraft} days
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DraftTable;
