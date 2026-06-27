import fs from "fs";
import path from "path";
import buildPostPayload from "./buildPostPayload.js";

const methodName = "PUT";

const createHttpFile = ({ inTargetPath, toPath, toConfigPath, inPort = 3000 }) => {
    const relative = toPath.replace(inTargetPath, "").replace(/\\/g, "/");

    const body = buildPostPayload({ toConfigPath });

    const content = `${methodName} http://localhost:${inPort}${relative}
Content-Type: application/json

${body}
`;

    fs.writeFileSync(path.join(toPath, "rest.http"), content);
};

export default createHttpFile;