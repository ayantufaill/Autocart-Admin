interface TornamentState {
  id: string;
  name: string;
  tournamentImage: string;
  startDate: string;
  endDate: string;
  location: string;
  areaLocation: string;
  registeredTeams: number;
  winnerPrize: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  teamRegistrationFee: string;
  discount: string;
  teams: [
    {
      id: string;
      name: string;
      createdById: string;
      tournamentId: string;
      status: string;
      description: string;
      logo: string;
      city: string;
      country: string;
      area: string;
      coach: string;
      rank: number;
      maxPlayers: string;
      contactNumber: string;
      wins: number;
      losses: number;
      ties: number;
      createdAt: string;
      updatedAt: string;
      players: [];
    }
  ];
}

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

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Suspended" | "Banned";
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  adsPosted?: number;
  userId?: string;
  imageUrl?: string;
  regDatets?: string;
}
const stats = [
  {
    title: "Total Ads",
    value: "7,854,472",
    color: "#1E40AF",
    change: "+9.2%",
    unit: "Ads",
  },
  {
    title: "Pending Ads",
    value: "7,854,472",
    color: "#854D0E",
    change: "+9.2%",
    unit: "Ads",
  },
  {
    title: "Active Ads",
    value: "7,854,472",
    color: "#166534",
    change: "+9.2%",
    unit: "Ads",
  },
  {
    title: "Daily Ads Created",
    value: "2,854,472",
    color: "#991B1B",
    change: "+9.2%",
    unit: "Ads",
  },
];

const users = [
  {
    title: "Total Users",
    value: "7,854,472",
    color: "#1E40AF",
    change: "+9.2%",
    unit: "Users",
  },
  {
    title: "Active Users",
    value: "7,854,472",
    color: "#166534",
    change: "+9.2%",
    unit: "Users",
  },
  {
    title: "Daily Register Users",
    value: "7,854,472",
    color: "#854D0E",
    change: "+9.2%",
    unit: "Users",
  },
  {
    title: "Daily Login",
    value: "7,854,472",
    color: "#991B1B",
    change: "-9.2%",
    unit: "Users",
  },
];

const financeData = [
  {
    title: "Daily",
    amount: "$6,733,345",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "$6,767,345",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "$6,833,345",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "$6,733,395",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const flaggedMessage = [
  {
    title: "Daily",
    amount: "54",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "25455",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "374588",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "8752285",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const reportedMessage = [
  {
    title: "Daily",
    amount: "54",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "25455",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "374588",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "8752235",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const inboxMail = [
  {
    title: "Daily",
    amount: "54",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "25455",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "34588",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "8752235",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const outboxMail = [
  {
    title: "Daily",
    amount: "54",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "25455",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "347588",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "8752235",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];

const stories = [
  {
    title: "Daily",
    amount: "852",
    percentage: "+9.2%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Weekly",
    amount: "54752",
    percentage: "+9.4%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Monthly",
    amount: "255475",
    percentage: "-9.9%",
    comparisonText: "Compared to yesterday",
  },
  {
    title: "Yearly",
    amount: "22534285",
    percentage: "+9.1%",
    comparisonText: "Compared to yesterday",
  },
];
