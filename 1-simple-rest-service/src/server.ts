/** yggdrasil imports */
import { Bootstrap, IBootstrapRoute } from '@yggdrasil/startup';
import { Router } from '@yggdrasil/mvc';
import { FileLogger } from '@yggdrasil/core';
import { MongoDBRepository } from '@yggdrasil/data';

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
  public api(router: Router, repository?: MongoDBRepository): IBootstrapRoute {
    const basicAPI = new BasicAPIRoute(router, repository);

    return { prefix: '/api' };
  }

}
