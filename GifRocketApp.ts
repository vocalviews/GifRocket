import {
    ILogger,
} from '@rocket.chat/apps-ts-definition/accessors';
import { App } from '@rocket.chat/apps-ts-definition/App';
import { IAppInfo } from '@rocket.chat/apps-ts-definition/metadata';

export class GifRocketApp extends App {
    constructor(info: IAppInfo, logger: ILogger) {
        super(info, logger);
    }
}
