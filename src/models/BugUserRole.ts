import { Bug } from "./Bug";
import { User } from "./User";
import { Role } from "./Role";

export interface BugUserRole {
	bug: Bug;
	user: User;
	role: Role;
}
