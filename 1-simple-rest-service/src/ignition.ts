/** yggdrasil imports */
import { IYggdrasilOptions, EApplicationType } from '@yggdrasil/startup';
import { Server } from '@yggdrasil/mvc';

/** Application imports */
import { YggdrasilServer } from './server';

const options: IYggdrasilOptions = {
  application: {
    type: EApplicationType.REST,
    database: {
      options: {
        type: 'mongodb'
      }
    }
  }
};

/**
 * Start yggdrasil application
 */
export const app: Promise<Server> = new YggdrasilServer().bootstrap(3001, options);
