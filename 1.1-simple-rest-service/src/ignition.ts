/** yggdrasil imports */
import {
	IYggdrasilOptions,
	EApplicationType
} from '@yggdrasilts/core/modules/startup';
import {
	Server
} from '@yggdrasilts/mvc';

/** Application imports */
import {
	YGServer
} from './server';

const options: IYggdrasilOptions = {
	application: {
		type: EApplicationType.REST
	}
};

/**
 * Start yggdrasil application
 */
export const app: Promise < Server > = new YGServer().bootstrap(3011, options);
