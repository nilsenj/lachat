import {User} from "./User";

export class Participant {
  id: number;
  thread_id: number;
  user_id: number;
  last_read: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  user: User;
}
