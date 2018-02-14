/** yggdrasil imports */
import {
	Router
} from '@yggdrasilts/mvc';
import {
	FileLogger,
	Bootstrap
} from '@yggdrasilts/core';
import {
	IBootstrapRoute
} from '@yggdrasilts/core/modules/startup';

/** Application imports */
import {
	APIRoute
} from './routes/api.route';

/**
 * @class YggdrasilServer
 */
export class YggdrasilServer extends Bootstrap {

	/** YggdrasilServer logger */
	public logger: FileLogger;

	/** Default constructor */
	constructor() {
		super();

		this.logger = new FileLogger(YggdrasilServer.name);
	}

	/**
	 * Creates API routes
	 * @param router Express Router
	 */
	public api(router: Router): IBootstrapRoute {
		const api = new APIRoute(router);

		return {
			prefix: '/api'
		};
	}

}
