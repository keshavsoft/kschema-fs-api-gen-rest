import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async () => {
    const module = await import(`./bin/${getLatestVersion()}/tasks/actions/index.js`);

    return module.default; // Returns a function
};

export {
    load
};