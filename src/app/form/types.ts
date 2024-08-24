import z from "zod";

import { ApplicationSchema } from "./validation";

export type ApplicationType = z.infer<typeof ApplicationSchema>;
