export interface registerUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface loginUser {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Suspended" | "Banned";
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  adsCount: number;
}
