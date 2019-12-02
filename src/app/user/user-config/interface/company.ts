export interface Company {
   id?: String,
   _id?: String,
   name: String,
   ssm?: String,
   categories?: [{ name?: String, descriptions?: [{ name?: String }] }]; 
}
