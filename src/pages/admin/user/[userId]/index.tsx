import ErrorState from "@/components/common/Error";
import Loading from "@/components/common/Loading/Loading";
import UserOpened from "@/components/common/Users/UserOpened";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserById } from "@/redux/slices/userSlice";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userById, loading, error } = useAppSelector((state) => state.user);
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  const router = useRouter();
  const userId = router.query?.userId;

  useEffect(() => {
    if (!userId) return;
    const id = Array.isArray(userId) ? userId[0] : userId;
    dispatch(fetchUserById(id));

    if (userById) {
      setIsUserLoading(false);
    }

  }, [userId]);

  return (
    <Container sx={{ mt: 4 }}>
      {
        loading || isUserLoading ? <Loading /> :
          error ? <ErrorState error={error} /> :
            userById && <UserOpened key={userById.id} status={userById.status || ""} userData={userById} />
      }
    </Container>
  );
};

export default index;
