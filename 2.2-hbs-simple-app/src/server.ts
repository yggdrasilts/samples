/** yggdrasil imports */
import { FileLogger, Bootstrap } from '@yggdrasil/core';
import { IBootstrapRoute } from '@yggdrasil/core/modules/startup';
import { Router } from '@yggdrasil/mvc';

/** Application imports */
import { HomeRoute } from './routes/home.route';
import { HBSHelper } from './helpers/hbs.helper';

/**
 * @class YggdrasilServer
 */
export class YggdrasilServer extends Bootstrap {

	/** YggdrasilServer logger */
	public logger: FileLogger;

	private hbsHelper: HBSHelper;

	/** Default constructor */
	constructor() {
		super();
		this.logger = new FileLogger(YggdrasilServer.name);

		this.hbsHelper = new HBSHelper();
		this.hbsHelper.registerPartials('dist/views/partials');
	}

	/**
	 * Creates routes
	 * @param router Express Router
	 */
	public routes(router: Router) {
		const homeRoute = new HomeRoute(router);
	}

}
