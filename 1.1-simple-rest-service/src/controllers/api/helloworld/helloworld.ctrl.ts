/** yggdrasil imports */
import { YGLogger } from '@yggdrasilts/core';
import { Request, Response } from '@yggdrasilts/mvc';

/** Application imports */
import { HelloWorld } from './helloworld.dto';

/**
 * @class HelloWorldCtrl
 */
export class HelloWorldCtrl {

	/** HelloWorldCtrl logger */
	private logger: YGLogger;

	/** HelloWorldCtrl property */
	private helloWorld: HelloWorld[];

	/** Default constructor */
	constructor() {
		this.logger = new YGLogger(HelloWorldCtrl.name);
		this.helloWorld = new Array();
	}

	/**
	 * Returns helloworld array.
	 *
	 * @method getAll
	 * @param req Request
	 * @param res Response
	 */
	public getAll = async (req: Request, res: Response) => {
		this.logger.debug('get all messages.');

		res.status(200).json({
			method: 'GET',
			messages: this.helloWorld
		});

	}

	/**
	 * Returns helloworld message if id exists.
	 *
	 * @method getById
	 * @param req Request
	 * @param res Response
	 */
	public getById = async (req: Request, res: Response) => {
		this.logger.debug('get message by id.');

		const id = Number(req.params.id);
		const result = this.helloWorld.find(element => element.getId() === id);

		res.status(200).json({
			method: 'GET',
			message: result || 'No result'
		});

	}

	/**
	 * Adds new message into helloworld array.
	 *
	 * @method post
	 * @param req Request
	 * @param res Response
	 */
	public post = async (req: Request, res: Response) => {
		this.logger.debug('postHelloWorld response.');

		this.helloWorld.push(new HelloWorld(req.body.id, req.body.name));

		res.status(200).json({
			method: 'POST',
			message: this.helloWorld
		});
	}

	/**
	 * Modifies helloworld message if id exists.
	 *
	 * @method put
	 * @param req Request
	 * @param res Response
	 */
	public put = async (req: Request, res: Response) => {
		this.logger.debug('putHelloWorld response.');

		const id = Number(req.params.id);
		const name = req.body.name;

		const result = this.helloWorld.map(element => element.getId() === id ? element.replaceName(name) : element);
		res.status(200).json({
			method: 'PUT',
			message: this.helloWorld
		});
	}

	/**
	 * Delete hellosworld array.
	 *
	 * @method delete
	 * @param req Request
	 * @param res Response
	 */
	public deleteAll = (req: Request, res: Response) => {
		this.logger.debug('Delete array.');

		this.helloWorld = new Array();

		res.status(200).json({
			method: 'DELETE',
			message: this.helloWorld
		});
	}

	/**
	 * Delete hellosworld message if id exists.
	 *
	 * @method delete
	 * @param req Request
	 * @param res Response
	 */
	public deleteById = (req: Request, res: Response) => {
		this.logger.debug('Delete message.');

		const id = Number(req.params.id);

		this.helloWorld = this.helloWorld.filter(element => element.getId() !== id);

		res.status(200).json({
			method: 'DELETE',
			message: this.helloWorld
		});
	}
}
