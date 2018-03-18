export class Message {
  id: number;
  thread_id: number;
  user_id: number;
  body: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}
