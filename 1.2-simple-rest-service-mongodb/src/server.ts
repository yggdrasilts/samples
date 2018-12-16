/** yggdrasil imports */
import { Router } from '@yggdrasilts/mvc';
import { YGLogger, Bootstrap } from '@yggdrasilts/core';
import { IBootstrapRoute } from '@yggdrasilts/core/modules/startup';
import { MongoDBRepository } from '@yggdrasilts/data';

/** Application imports */
import { BasicAPIRoute } from './routes/api/basic.route';

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
	 * Creates API routes
	 * @param router Express Router
	 */
	public api(router: Router, repository: MongoDBRepository): IBootstrapRoute {
		const basicAPI = new BasicAPIRoute(router, repository);

		return { prefix: '/api' };
	}

}
