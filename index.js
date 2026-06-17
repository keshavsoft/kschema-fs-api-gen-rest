import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const module = await import(`./bin/${getLatestVersion()}/tasks/actions/${cmd}.js`);

    return module.default; // Returns a function
};

const withMail = async ({ toPath, toConfigPath, showLog }) => {
    const commandToSend = "withMail";

    const commandFunction = await load(commandToSend);
    // console.log("  ...args :", args);
    await commandFunction({
        toPath, showLog, toConfigPath
    });
};

export {
    withMail
};