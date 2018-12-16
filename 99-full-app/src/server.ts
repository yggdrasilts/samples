/** yggdrasil imports */
import { Bootstrap, IBootstrapRoute } from '@yggdrasil/startup';
import { Router } from '@yggdrasil/mvc';
import { YGLogger } from '@yggdrasil/core';

/** Application imports */
import { BasicAPIRoute } from './routes/api/basic.route';
import { IndexRoute } from './routes/index.route';

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
  public api(router: Router): IBootstrapRoute {
    const basicAPI = new BasicAPIRoute(router);

    return { prefix: '/api' };
  }

  public routes(router: Router) {

    const indexRoute = new IndexRoute(router);

  }

}
