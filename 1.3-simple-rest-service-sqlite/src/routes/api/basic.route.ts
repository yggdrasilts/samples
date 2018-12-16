/** yggdrasil imports */
import { BaseRoutes, Router } from '@yggdrasilts/mvc';
import { YGLogger } from '@yggdrasilts/core';
import { SQLiteDBRepository } from '@yggdrasilts/data';

/** Application controllers imports */
import { BasicCtrl } from '../../controllers/api';

/**
 * @class BasicAPIRoute
 */
export class BasicAPIRoute extends BaseRoutes {

	/** Declare controllers */
	private basicCtrl: BasicCtrl;

	/** BasicAPIRoute logger */
	public logger: YGLogger;

	/** Default constructor */
	constructor(router: Router, repository: SQLiteDBRepository) {
		super();
		this.logger = new YGLogger(BasicAPIRoute.name);
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
