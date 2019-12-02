import { User } from 'src/app/user/user-config/interface/user';

export interface Post {

   _id?: string;
   id?: string;
   date?: Date;
   categories?: string[];
   title?: string;
   subtitle?: string;
   content?: string;
   tags?: string[];
   image?: string;
   slug?: string;
   owner?: User;

}
