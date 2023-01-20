import { lambdaHandler } from '../../handlers/hello';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

import helloEvent from '../../../events/hello.json';
const event: unknown = Object.assign({}, helloEvent);
const context: unknown = {};

describe('Demo test', () => {
    test('This is the proof of concept that the test works.', async () => {
        const res = await lambdaHandler(event as APIGatewayProxyEvent, context as Context);
        expect(res.statusCode).toBe(200);
    });
});
