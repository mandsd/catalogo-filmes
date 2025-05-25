export interface Movie {
  id: number;
  name: string;
  genre: string;
  rating: number;
  comment: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
} 