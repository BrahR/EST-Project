type User = {
  id?: number;
  name?: string;
  email: string;
  password?: string;
  role?: string;
  token?: string | null;
};

export default User;
