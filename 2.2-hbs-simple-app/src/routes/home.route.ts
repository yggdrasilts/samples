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
	HomeCtrl
} from '../controllers/routes';

/**
 * @class HomeRoute
 */
export class HomeRoute extends BaseRoutes {

	/** HomeCtrl Ctrl */
	private homeCtrl: HomeCtrl;

	/** HomeCtrl logger */
	public logger: YGLogger;

	/** Default constructor */
	constructor(router: Router) {
		super();
		this.logger = new YGLogger(HomeRoute.name);
		this.homeCtrl = new HomeCtrl();

		/** Creates routes */
		this.create(router);
	}

	/**
	 * Creates routes.
	 *
	 * @class HomeCtrl
	 * @method create
	 */
	public create(router: Router) {
		this.logger.debug('Creating HomeCtrl routes.');

		router.route('/home').get(this.homeCtrl.home);
		router.route('/contact').get(this.homeCtrl.contact);
	}

}
