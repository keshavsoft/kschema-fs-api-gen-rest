import fs from "fs";
import path from "path";
import buildPostPayload from "./buildPostPayload.js";

const createHttpFile = ({ inTargetPath, toPath, toConfigPath, inTableName }) => {
    const relative = inTargetPath.replace(toPath, "").replace(/\\/g, "/");

    const body = buildPostPayload({
        workspacePath: toPath, toConfigPath,
        inTableName
    });

    const content = `GET http://localhost:3000${relative}
    Content-Type: application/json

${body}
`;

    fs.writeFileSync(path.join(inTargetPath, "rest.http"), content);
};

export default createHttpFile;