export enum UserLevel {
  Manager,
  Staff,
}

export type User = {
  username: string;
  level: UserLevel;
  token: string;
  created_timestamp: string;
  updated_timestamp: string;
};

export type RegisterData = {
  username: string;
  password: string;
};

export type LoginData = {
  username: string;
  password: string;
};
