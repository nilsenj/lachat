export class Company {
  id: string;
  name: string;
  creator_id: number;
  created_at: string;
  deleted_at: string;
  participants: any;
  threads: any = [];
  threadStatus: boolean = false;
}
