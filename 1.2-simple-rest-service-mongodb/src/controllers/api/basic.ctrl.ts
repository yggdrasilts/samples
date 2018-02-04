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
   * Gets Data from mongodb
   *
   * @method getData
   * @param req Request
   * @param res Response
   */
  public getData = async (req: Request, res: Response) => {
    this.logger.debug('getData response');

    let data: Data | Data[];
    try {
      if (req.params.id) {
        this.logger.debug(`Search data by id: ${req.params.id}.`);
        data = await this.manager.findOneById(Data, req.params.id);
      } else {
        this.logger.debug('Gets all data.');
        data = await this.manager.find(Data);
      }

      res.status(200).json({ method: 'GET', result: data || `No result with id ${req.params.id}` });
    } catch (error) {
      this.logger.error(error);
      res.status(500).json({ method: 'GET', error: error.message });
    }

  }

  /**
   * Adds data to mongodb
   *
   * @method addData
   * @param req Request
   * @param res Response
   */
  public addData = async (req: Request, res: Response) => {
    this.logger.debug('addData response.');

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
   * Updates data inserted
   *
   * @method updateData
   * @param req Request
   * @param res Response
   */
  public updateData = async (req: Request, res: Response) => {
    this.logger.debug('updateData response.');

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
   * Deletes mongodb data
   *
   * @method deleteData
   * @param req Request
   * @param res Response
   */
  public deleteData = async (req: Request, res: Response) => {
    this.logger.debug('deleteData response.');

    const data = await this.manager.findOneById(Data, req.params.id);

    if (data) {
      const result = await this.manager.remove(data);
      res.status(200).json({ method: 'DELETE', data: { message: `Delete data with id: ${req.params.id}` } });
    } else {
      this.logger.error(`Error finding data by id: ${req.params.id}`);
      res.status(200).json({ method: 'DELETE', error: 'Not object found.'  });
    }
  }
}
