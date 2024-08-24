import z from "zod";

import { Application } from "./validation";

export type ApplicationType = z.infer<typeof Application>;
