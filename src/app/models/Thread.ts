import {Participant} from "./Participant";
import {Message} from "./Message";

export class Thread {
  id: number;
  body: string;
  created_at: string;
  deleted_at: string;
  updated_at: string;
  participants?: Participant[];
  latest_message?: Message;
}

