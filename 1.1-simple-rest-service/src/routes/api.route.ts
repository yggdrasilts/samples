/** yggdrasil imports */
import {
	BaseRoutes,
	Router
} from '@yggdrasilts/mvc';
import {
	YGLogger
} from '@yggdrasilts/core';

/** Application controllers imports */
import {
	HelloWorldCtrl
} from '../controllers/api';

/**
 * @class APIRoute
 */
export class APIRoute extends BaseRoutes {

	/** Declare controllers */
	private helloWorldCtrl: HelloWorldCtrl;

	/** APIRoute logger */
	public logger: YGLogger;

	/** Default constructor */
	constructor(router: Router) {
		super();
		this.logger = new YGLogger(APIRoute.name);
		this.helloWorldCtrl = new HelloWorldCtrl();

		/** Creates routes */
		this.create(router);
	}

	/**
	 * Creates routes.
	 *
	 * @class APIRoute
	 * @method create
	 */
	public create(router: Router) {
		this.logger.debug('Creating api routes.');

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
		this.logger.debug('Configuring method get.');

		router.route('/helloworld').get(this.helloWorldCtrl.getAll);
		router.route('/helloworld/:id').get(this.helloWorldCtrl.getById);
	}

	/** Creates POSTS API */
	private posts(router: Router) {
		this.logger.debug('Configuring method post.');

		router.route('/helloworld').post(this.helloWorldCtrl.post);
	}

	/** Creates PUTS API */
	private puts(router: Router) {
		this.logger.debug('Configuring method put.');

		router.route('/helloworld/:id').put(this.helloWorldCtrl.put);
	}

	/** Creates DELETES API */
	private deletes(router: Router) {
		this.logger.debug('Configuring method delete.');

		router.route('/helloworld').delete(this.helloWorldCtrl.deleteAll);
		router.route('/helloworld/:id').delete(this.helloWorldCtrl.deleteById);
	}
}
