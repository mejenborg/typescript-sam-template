"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("../../handlers/hello");
const hello_json_1 = __importDefault(require("../../../events/hello.json"));
const event = Object.assign({}, hello_json_1.default);
const context = {};
describe('Demo test', () => {
    test('This is the proof of concept that the test works.', async () => {
        const res = await (0, hello_1.lambdaHandler)(event, context);
        expect(res.statusCode).toBe(200);
    });
});
//# sourceMappingURL=hello.test.js.map