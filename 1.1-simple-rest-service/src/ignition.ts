/** yggdrasil imports */
import {
	IYggdrasilOptions,
	EApplicationType
} from '@yggdrasil/core/modules/startup';
import {
	Server
} from '@yggdrasil/mvc';

/** Application imports */
import {
	YggdrasilServer
} from './server';

const options: IYggdrasilOptions = {
	application: {
		type: EApplicationType.REST
	}
};

/**
 * Start yggdrasil application
 */
export const app: Promise < Server > = new YggdrasilServer().bootstrap(3011, options);
