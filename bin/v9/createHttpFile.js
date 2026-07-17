import fs from "fs";
import path from "path";
import buildPostPayload from "./buildPostPayload.js";

const createHttpFile = ({ inTargetPath, toPath, toConfigPath }) => {
    const relative1 = inTargetPath.replace(toPath, "").replace(/\\/g, "/");
    const relative = toPath.replace(inTargetPath, "").replace(/\\/g, "/");

    const body = buildPostPayload({ toConfigPath });

    const content = `GET http://localhost:3000${relative}
    Content-Type: application/json

${body}
`;

    fs.writeFileSync(path.join(toPath, "rest.http"), content);
};

export default createHttpFile;