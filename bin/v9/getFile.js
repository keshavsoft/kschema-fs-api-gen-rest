import fs from "fs";
import path from "path";

const createHttpFile = ({ inTargetPath, toPath, inPort = "3000" }) => {
    const relative = toPath.replace(inTargetPath, "").replace(/\\/g, "/");

    const content = `GET http://localhost:${inPort}${relative}`;

    fs.writeFileSync(path.join(toPath, "rest.http"), content);
};

export default createHttpFile;