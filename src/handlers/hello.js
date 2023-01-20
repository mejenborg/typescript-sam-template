"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const lambdaHandler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'Hello world',
    };
};
exports.lambdaHandler = lambdaHandler;
//# sourceMappingURL=hello.js.map