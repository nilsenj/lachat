import {Role} from "./Role";

export class User {
  name: string;
  avatar: string;
  password: string;
  created_at: string;
  deleted_at: string;
  email: string;
  role?: Role;
  roles?: Role[];
}
