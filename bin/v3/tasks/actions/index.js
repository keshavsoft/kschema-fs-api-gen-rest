import path from "path";

import { locateSource } from "./WithMail/steps/locateSource.js";
import { locateDestination } from "./WithMail/steps/locateDestination.js";
import { createFolder } from "../../core/createFolder.js";

import updateEndPointsJs from "./WithMail/steps/updateEndPointsJs.js";
import createHttpFile from "./WithMail/steps/createHttpFile.js";

import { announce } from "./WithMail/steps/announce.js";

import resolveFolderName from "./WithMail/steps/resolveFolderName.js";
import actions from "./WithMail/actions.json" with { type: "json" };

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