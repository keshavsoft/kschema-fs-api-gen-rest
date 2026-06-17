import path from "path";
import { withMail } from "../../../index.js";

withMail({
    toPath: process.cwd(),
    toConfigPath: path.join(process.cwd(), "Config", "Schemas"),
    inTableName: "journals.json",
    showLog: true
});