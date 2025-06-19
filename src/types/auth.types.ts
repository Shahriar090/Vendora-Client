export type TUser = {
  id: string;
  email: string;
  role: string;
};

export type TAuthData = {
  user: TUser | null;
  accessToken: string;
};

export type TAuthContext = {
  auth: TAuthData;
  setAuthData: (authData: TAuthData) => void;
};
