import path from "path";

import createHttpFile from "./createHttpFile.js";
import getFile from "./getFile.js";
import postFile from "./postFile.js";

const startFunc = ({ toPath, toConfigPath, inTargetPath, showLog = true,
    inPort
}) => {

    if (toConfigPath) {
        if (showLog) console.log("post...");
        // createHttpFile({ toPath, toConfigPath, inTargetPath });
        postFile({ toPath, toConfigPath, inTargetPath, inPort });
    } else {
        getFile({ toPath, inTargetPath, inPort });
    };

    return true;
};

export default startFunc;