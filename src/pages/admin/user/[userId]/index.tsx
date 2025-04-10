import UserOpened from "@/components/common/Users/UserOpened";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserById } from "@/redux/slices/userSlice";
import { Box, CircularProgress, Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userById, loading, error } = useAppSelector((state) => state.user);
  const router = useRouter();
  const userId = router.query?.userId;

  useEffect(() => {
    if (!userId) return;
    console.log(userById);
    const id = Array.isArray(userId) ? userId[0] : userId;
    dispatch(fetchUserById(id));
  }, [userId]);

  return (
    <Container sx={{ mt: 4 }}>
      {loading && !userById && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {!loading && userById && (
        <UserOpened status={userById.status || "ACTIVE"} userData={userById} />
      )}
    </Container>
  );
};

export default index;
