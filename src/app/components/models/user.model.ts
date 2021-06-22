import { Role } from "./role.model";

export class UserModel{
    public userName: string;
    public email: string;
    public password: string;
    public confirmpwd: string;
    public phoneNo: string;
    public dateCreated: string;
    public userImage: string;
	public roles: Role[];
}