import { CommentTable } from "./Comment";
import { ImageTable } from "./Image";
import { LikeTable } from "./Like";
import { PostTable } from "./Post";
import { SessionTable } from "./Session";
import { UserTable } from "./User";

const entities = [UserTable, PostTable, SessionTable, LikeTable,CommentTable, ImageTable]
export {UserTable, PostTable, SessionTable, LikeTable,CommentTable, ImageTable}

export default entities