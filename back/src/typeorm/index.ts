import { CommentTable } from "./Comment";
import { LikeTable } from "./Like";
import { PostTable } from "./Post";
import { SessionTable } from "./Session";
import { UserTable } from "./User";

const entities = [UserTable, PostTable, SessionTable, LikeTable,CommentTable]
export {UserTable, PostTable, SessionTable, LikeTable,CommentTable}

export default entities