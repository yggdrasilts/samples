/** yggdrasil imports */
import { Request, Response } from '@yggdrasil/mvc';
import { YGLogger } from '@yggdrasil/core';

/**
 * @class IndexCtrl
 */
export class IndexCtrl {

  /** IndexCtrl logger */
  private logger: YGLogger;

  /** Default constructor */
  constructor() {
    this.logger = new YGLogger(IndexCtrl.name);
  }

  /**
   * Render Home page
   *
   * @method home
   * @param req Request
   * @param res Response
   */
  public home = (req: Request, res: Response) => {
    this.logger.debug('go to home.');

    res.render('index', { title: 'Home', message: 'Hello there!' });
  }

}
