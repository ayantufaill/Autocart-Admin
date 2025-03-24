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
