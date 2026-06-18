import path from "path";

import createHttpFile from "./createHttpFile.js";

const startFunc = ({ toPath, toConfigPath }) => {
    const localToPath = toPath;
    console.log("toPath, toConfigPath : ", toPath, toConfigPath);

    createHttpFile({
        inTargetPath: localToPath,
        toPath: process.cwd(), toConfigPath
    });

    return true;
};

export default startFunc;