export interface Player {
  _id: string;
  name: string;
  position: string;
  age: number;
  country: string;
  team: string;
  stats: {
    goals: number;
    assists: number;
    matches: number;
    minutes: number;
    yellowCards: number;
    redCards: number;
    passAccuracy: number;
  };
  physical: {
    height: number;
    weight: number;
    preferredFoot: 'Left' | 'Right' | 'Both';
  };
  createdAt: Date;
}

export interface Team {
  _id: string;
  name: string;
  league: string;
  founded: number;
  stadium: string;
  coach: string;
  createdAt: Date;
} 