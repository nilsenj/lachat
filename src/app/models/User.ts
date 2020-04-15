import {Role} from "./Role";
import {Profile} from "./Profile";

export class User {
  id?: string;
  name: string;
  avatar: string;
  password: string;
  created_at: string;
  deleted_at: string;
  email: string;
  role?: Role;
  roles?: Role[];
  profile?: Profile;
  token?: any;
}
