import path from "path";

import createHttpFile from "./createHttpFile.js";
import getFile from "./getFile.js";
import postFile from "./postFile.js";
import deleteFile from "./deleteFile.js";
import putFile from "./putFile.js";

const startFunc = ({ toPath, toConfigPath, inTargetPath, showLog = true,
    inPort, inMethod
}) => {
    //toPath and inTargetPath are both needed as they will replace one another for end point generation
    switch (inMethod) {
        case "DELETE":
            if (showLog) console.log("start rest generate for post...");

            deleteFile({ toPath, toConfigPath, inTargetPath, inPort });
            break;
        case "PUT":
            if (showLog) console.log("start rest generate for post...");

            putFile({ toPath, toConfigPath, inTargetPath, inPort });
            break;

        default:
            if (toConfigPath) {
                if (showLog) console.log("start rest generate for post...");

                postFile({ toPath, toConfigPath, inTargetPath, inPort });
            } else {
                if (showLog) console.log("start rest generate for get...");

                getFile({ toPath, inTargetPath, inPort });
            };
            break;
    };

    return true;
};

export default startFunc;