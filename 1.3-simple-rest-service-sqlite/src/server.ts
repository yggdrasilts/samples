/** yggdrasil imports */
import { Router } from '@yggdrasilts/mvc';
import { FileLogger, Bootstrap } from '@yggdrasilts/core';
import { IBootstrapRoute } from '@yggdrasilts/core/modules/startup';
import { SQLiteDBRepository } from '@yggdrasilts/data';

/** Application imports */
import { BasicAPIRoute } from './routes/api/basic.route';

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
	public api(router: Router, repository: SQLiteDBRepository): IBootstrapRoute {
		const basicAPI = new BasicAPIRoute(router, repository);

		return { prefix: '/api' };
	}

}
