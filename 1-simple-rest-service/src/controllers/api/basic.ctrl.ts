/** yggdrasil imports */
import { Request, Response } from '@yggdrasil/mvc';
import { FileLogger } from '@yggdrasil/core';
import { MongoDBRepository } from '@yggdrasil/data';

import { Connection, MongoEntityManager } from 'typeorm';
import { validate } from 'class-validator';
import { Data } from '../../repository/entities/Data';

/**
 * @class BasicCtrl
 */
export class BasicCtrl {

  /** BasicCtrl logger */
  private logger: FileLogger;

  private connection: Connection;
  private manager: MongoEntityManager;

  /** Default constructor */
  constructor(repository: MongoDBRepository) {
    this.logger = new FileLogger(BasicCtrl.name);
    this.manager = repository.getManager();
  }

  /**
   * Gets basic 'Hello World!' json response
   *
   * @method getHelloworld
   * @param req Request
   * @param res Response
   */
  public getHelloWorld = async (req: Request, res: Response) => {
    this.logger.debug('getHelloWorld response.');

    const data = await this.manager.find(Data);

    res.status(200).json({ method: 'GET', result: data });
  }

  /**
   * Posts basic 'Hello World!' json response
   *
   * @method postHelloworld
   * @param req Request
   * @param res Response
   */
  public postHelloWorld = async (req: Request, res: Response) => {
    this.logger.debug('postHelloWorld response.');

    const reqData = new Data();
    reqData.text = req.body.text;
    reqData.title = req.body.title;

    const errors = await validate(reqData);
    if (errors.length > 0) {
      this.logger.error('Errors validating request body object');
      res.status(200).json({ method: 'POST', error: errors  });
    } else {
      const data = await this.manager.save(reqData);
      res.status(200).json({ method: 'POST', data: { message: `Saved data ${JSON.stringify(data)}` } });
    }
  }

  /**
   * Puts basic 'Hello World!' json response
   *
   * @method putHelloworld
   * @param req Request
   * @param res Response
   */
  public putHelloWorld = (req: Request, res: Response) => {
    this.logger.debug('putHelloWorld response.');

    res.status(200).json({ method: 'PUT', data: 'Hello World!', body: req.body });
  }

  /**
   * Deletes basic 'Hello World!' json response
   *
   * @method deleteHelloworld
   * @param req Request
   * @param res Response
   */
  public deleteHelloWorld = (req: Request, res: Response) => {
    this.logger.debug('deleteHelloWorld response.');

    res.status(200).json({ method: 'DELETE', data: 'Hello World!', body: req.body });
  }
}
