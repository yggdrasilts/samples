/** yggdrasil imports */
import { BaseRoutes, Router } from '@yggdrasil/mvc';
import { YGLogger } from '@yggdrasil/core';

/** Application controllers imports */
import { IndexCtrl } from '../controllers/routes/index.ctrl';

/**
 * @class IndexRoute
 */
export class IndexRoute extends BaseRoutes {

  /** IndexRoute logger */
  public logger: YGLogger;

  /** IndexRoute Ctrl */
  private indexCtrl: IndexCtrl;

  /** Default constructor */
  constructor(router: Router) {
    super();
    this.logger = new YGLogger(IndexRoute.name);
    this.indexCtrl = new IndexCtrl();

    /** Creates routes */
    this.create(router);
  }

  /**
   * Creates routes.
   *
   * @class IndexRoute
   * @method create
   */
  public create(router: Router) {
    this.logger.debug('Creating IndexRoute routes.');

    router.route('/index').get(this.indexCtrl.home);
  }

}
