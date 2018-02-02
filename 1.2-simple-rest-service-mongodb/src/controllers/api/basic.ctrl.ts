/** yggdrasil imports */
import { FileLogger } from '@yggdrasil/core';
import { Request, Response } from '@yggdrasil/mvc';
import { MongoDBRepository } from '@yggdrasil/data';

/** Third-party imports */
import { Connection, MongoEntityManager } from 'typeorm';
import { validate } from 'class-validator';

/** Application imports */
/** -> Entities */
import { Data } from '../../repository/entities/Data';

/**
 * @class BasicCtrl
 */
export class BasicCtrl {

  /** BasicCtrl logger */
  private logger: FileLogger;

  /** Entity manager to acceed into db */
  private manager: MongoEntityManager;

  /**
   * Default constructor
   * @param repository MongoDBRepository
   */
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

    let data: Data | Data[];
    try {
      if (req.params.id) {
        this.logger.debug(`Search data by id: ${req.params.id}.`);
        data = await this.manager.findOneById(Data, req.params.id);
      } else {
        this.logger.debug('Get all data.');
        data = await this.manager.find(Data);
      }

      res.status(200).json({ method: 'GET', result: data || `No result with id ${req.params.id}` });
    } catch (error) {
      this.logger.error(error);
      res.status(500).json({ method: 'GET', error: error.message });
    }

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

    const reqData = new Data(req.body.title, req.body.text);

    const errors = await validate(reqData);
    if (errors.length > 0) {
      this.logger.error('Errors validating request body object');
      res.status(200).json({ method: 'POST', error: errors  });
    } else {
      const data = await this.manager.save(reqData);
      res.status(200).json({ method: 'POST', data: { message: `Saved data with id: ${data.id}` } });
    }
  }

  /**
   * Puts basic 'Hello World!' json response
   *
   * @method putHelloworld
   * @param req Request
   * @param res Response
   */
  public putHelloWorld = async (req: Request, res: Response) => {
    this.logger.debug('putHelloWorld response.');

    const reqData = new Data(req.body.title, req.body.text);
    const id = req.params.id;

    const errors = await validate(reqData);
    if (errors.length > 0) {
      this.logger.error('Errors validating request body object');
      res.status(200).json({ method: 'PUT', error: errors  });
    } else {
      await this.manager.updateById(Data, reqData, id);
      res.status(200).json({ method: 'PUT', data: { message: `Updated data with id: ${id}` } });
    }

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
