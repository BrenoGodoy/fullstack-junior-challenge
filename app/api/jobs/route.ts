import { getAll } from "./controller";
import { handler } from "../middleware/handler";
import { secretMiddleware } from "./middlewares";

export const POST = handler(secretMiddleware, getAll);