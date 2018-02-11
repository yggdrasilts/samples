import * as hbs from 'hbs';

export class HBSHelper {
	private hbs;
	private blocks = {};

	constructor() {
		this.hbs = hbs;

		this.registerHelper('extend', this.extendHelper);
		this.registerHelper('block', this.blockHelper);
	}

	public registerPartials(dir: string) {
		this.hbs.registerPartials(dir);
	}

	// TODO: Review this tslint
	// tslint:disable-next-line
	public registerHelper(helperName: string, fn: Function) {
		this.hbs.registerHelper(helperName, fn);
	}

	private extendHelper = (name, context) => {
		let block = this.blocks[name];
		if (!block) {
			block = this.blocks[name] = [];
		}

		block.push(context.fn(this));
	}

	private blockHelper = (name) => {
		const val = (this.blocks[name] || []).join('\n');

		this.blocks[name] = [];
		return val;
	}
}
