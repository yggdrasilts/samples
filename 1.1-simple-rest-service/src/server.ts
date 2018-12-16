/** yggdrasil imports */
import {
	Router
} from '@yggdrasilts/mvc';
import {
	YGLogger,
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
 * @class YGServer
 */
export class YGServer extends Bootstrap {

	/** YGServer logger */
	public logger: YGLogger;

	/** Default constructor */
	constructor() {
		super();

		this.logger = new YGLogger(YGServer.name);
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
