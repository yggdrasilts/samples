/** yggdrasil imports */
import { BaseRoutes, Router } from '@yggdrasil/mvc';
import { FileLogger } from '@yggdrasil/core';
import { MysqlDBRepository } from '@yggdrasil/data';

/** Application controllers imports */
import { BasicCtrl } from '../../controllers/api';

/**
 * @class BasicAPIRoute
 */
export class BasicAPIRoute extends BaseRoutes {

	/** BasicAPIRoute logger */
	public logger: FileLogger;

	/** Declare controllers */
	private basicCtrl: BasicCtrl;

	/** Default constructor */
	constructor(router: Router, repository: MysqlDBRepository) {
		super();
		this.logger = new FileLogger(BasicAPIRoute.name);
		this.basicCtrl = new BasicCtrl(repository);

		/** Creates routes */
		this.create(router);
	}

	/**
	 * Creates routes.
	 *
	 * @class BasicAPIRoute
	 * @method create
	 */
	public create(router: Router) {
		this.logger.debug('Creating BasicRoutes routes.');

		/** GETS */
		this.gets(router);

		/** POSTS */
		this.posts(router);

		/** PUT */
		this.puts(router);

		/** DELETE */
		this.deletes(router);
	}

	/** Creates GETS API */
	private gets(router: Router) {
		this.logger.debug('Configuring gets.');

		router.route('/basic/:id?').get(this.basicCtrl.getData);
	}

	/** Creates POSTS API */
	private posts(router: Router) {
		this.logger.debug('Configuring posts.');

		router.route('/basic').post(this.basicCtrl.addData);
	}

	/** Creates PUTS API */
	private puts(router: Router) {
		this.logger.debug('Configuring puts.');

		router.route('/basic/:id').put(this.basicCtrl.updateData);
	}

	/** Creates DELETES API */
	private deletes(router: Router) {
		this.logger.debug('Configuring deletes.');

		router.route('/basic/:id').delete(this.basicCtrl.deleteData);
	}
}