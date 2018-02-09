/** yggdrasil imports */
import {
	Router
} from '@yggdrasil/mvc';
import {
	FileLogger,
	Bootstrap
} from '@yggdrasil/core';
import {
	IBootstrapRoute
} from '@yggdrasil/core/modules/startup';

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
