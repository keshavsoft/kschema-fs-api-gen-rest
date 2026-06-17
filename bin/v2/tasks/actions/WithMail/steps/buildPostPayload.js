// src/.../services/buildPostPayload.js
import fs from "fs";
import path from "path";
import startFunc from "../../withMail";

const startFunc = ({ workspacePath, inTableName, toConfigPath }) => {
    const schemaPath = toConfigPath;

    if (!fs.existsSync(schemaPath)) return "{}";

    const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

    const payload = {};

    (schema.columnsConfig || []).forEach(col => {
        if (col.isConsider) {
            payload[col.field] = col.defaultValue ?? "";
        }
    });

    return JSON.stringify(payload, null, 2);
};

export default startFunc;