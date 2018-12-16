/** yggdrasil imports */
import {
	YGLogger,
	Bootstrap
} from '@yggdrasilts/core';
import {
	IBootstrapRoute
} from '@yggdrasilts/core/modules/startup';
import {
	Router
} from '@yggdrasilts/mvc';

/** Application imports */
import {
	HomeRoute
} from './routes/home.route';

/**
 * @class YggdrasilServer
 */
export class YggdrasilServer extends Bootstrap {

	/** YggdrasilServer logger */
	public logger: YGLogger;

	/** Default constructor */
	constructor() {
		super();
		this.logger = new YGLogger(YggdrasilServer.name);
	}

	/**
	 * Creates routes
	 * @param router Express Router
	 */
	public routes(router: Router) {
		const homeRoute = new HomeRoute(router);
	}

}
