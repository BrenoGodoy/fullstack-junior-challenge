import { getAll } from "./controller";
import { handler } from "../middlewares/handler";
import { secretMiddleware } from "../middlewares/index";

export const POST = handler(secretMiddleware, getAll);