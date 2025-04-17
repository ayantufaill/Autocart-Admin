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

export interface Story {
  status: "Active" | "Expired" | "Flagged" | "Reported";
  userimgUrl: string;
  userId: string;
  storyContent: string;
  storyId: string;
  uploadDate: string;
  storyImageUrl: string;
}

interface StoryTableProps {
  stories: Story[];
}

const statusConfig = {
  Active: { color: "#F0FDF4", textColor: "#047857", icon: "#07B007" },
  Expired: { color: "#F9FAFB", textColor: "#9CA3AF", icon: "#6B7280" },
  Reported: { color: "#FEF2F2", textColor: "#9CA3AF", icon: "#EF4444" },
  Flagged: { color: "#FEFCE8", textColor: "#9CA3AF", icon: "#EAB308" },
};

const StoryTable: React.FC<StoryTableProps> = ({ stories }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredStories = stories.filter((story) =>
    story.userId.toLowerCase().includes(search.toLowerCase())
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
        <TableHead sx={{ visibility: stories.length === 0 ? "hidden" : "visible" }}>
          <TableRow>
            {[
              "Status",
              "User ID",
              "Story Content",
              "Story Id",
              "Upload Date",
            ].map((header, index) => (
              <TableCell
                key={header}
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                  backgroundColor: "#F3F4F6",
                  color: "#9CA3AF",
                  padding: "12px",
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
          {filteredStories.map((story, index, arr) => (
            <TableRow
              key={story.userId}
              sx={{
                backgroundColor: index % 2 === 0 ? "#F9F9F9" : "#F3F4F6",
              }}
            >
              <TableCell
                sx={{
                  textAlign: "center",
                  padding: "12px",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                <Box
                  onClick={() =>
                    router.push(`/admin/ads/${story.status.toLowerCase()}`)
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: statusConfig[story.status || "Active"].color,
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: statusConfig[story.status || "Active"].textColor,
                    minWidth: "100px",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      backgroundColor: statusConfig[story.status || "Active"].icon,
                      borderRadius: "3px",
                    }}
                  />
                  {story.status}
                </Box>
              </TableCell>

              <TableCell
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  borderLeft: "0.5px solid #CACACA",
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
                  }}
                >
                  <Avatar
                    src="/Images/Ads/profile.png"
                    sx={{ width: 24, height: 24 }}
                  />
                  <span>{story.userId}</span>
                </Box>
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: 600,
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    src="/Images/Ads/image.png"
                    alt={story.storyContent}
                    width="30"
                    height="30"
                    style={{ borderRadius: "5px" }}
                  />
                  <span>{story.storyContent}</span>
                </Box>
              </TableCell>

              <TableCell
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                {story.storyId}
              </TableCell>

              <TableCell
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  borderLeft: "0.5px solid #CACACA",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "0.5px solid #CACACA",
                }}
              >
                {story.uploadDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StoryTable;
