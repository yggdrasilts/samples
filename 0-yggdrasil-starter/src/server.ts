/** yggdrasil imports */
import { Bootstrap } from '@yggdrasil/startup';
import { FileLogger } from '@yggdrasil/core';

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

}
