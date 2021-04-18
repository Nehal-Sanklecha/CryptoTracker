import { setConsole } from 'react-query';

const noop = () => {};

setConsole({
    log: console.log,
    warn: console.warn,
    error: console.warn,
});

const consoleMethods = Object.keys(console);

const logger = consoleMethods.reduce(
    (loggerObject, method) => ({
        ...loggerObject,
        [method]: __DEV__ ? console[method] : noop,
    }),
    {},
);

export const createLogger = tag => {
    return {
        log: (...logs) => logger.log(tag, ...logs),
        error: (...logs) => logger.error(tag, ...logs),
    };
};

export default logger;
