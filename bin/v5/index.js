import path from "path";

import createHttpFile from "./createHttpFile.js";
import getFile from "./getFile.js";
import postFile from "./postFile.js";

const startFunc = ({ toPath, toConfigPath, inTargetPath }) => {
    if (toConfigPath) {

        // createHttpFile({ toPath, toConfigPath, inTargetPath });
        postFile({ toPath, toConfigPath, inTargetPath });
    } else {
        getFile({ toPath, inTargetPath });

    };

    return true;
};

export default startFunc;