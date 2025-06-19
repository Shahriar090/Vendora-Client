export type TUser = {
  id: string;
  email: string;
  role: string;
  name: { firstName: string; middleName?: string; lastName: string };
};

export type TAuthData = {
  user: TUser | null;
  accessToken: string;
};

export type TAuthContext = {
  auth: TAuthData;
  setAuthData: (authData: TAuthData) => void;
  logout: () => void;
};
