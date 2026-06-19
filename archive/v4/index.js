import path from "path";

import createHttpFile from "./createHttpFile.js";

const startFunc = ({ toPath, toConfigPath, inTargetPath }) => {
    createHttpFile({ toPath, toConfigPath, inTargetPath });

    return true;
};

export default startFunc;