/** yggdrasil imports */
import { IYggdrasilOptions, EApplicationType } from '@yggdrasilts/core/modules/startup';
import { Server } from '@yggdrasilts/mvc';

/** Application imports */
import { YggdrasilServer } from './server';

const options: IYggdrasilOptions = {
	application: {
		type: EApplicationType.REST,
		database: {
			options: {
				type: 'mysql',
				database: 'simple-rest-service-mysql'
			}
		}
	}
};

/**
 * Start yggdrasil application
 */
export const app: Promise < Server > = new YggdrasilServer().bootstrap(3014, options);
