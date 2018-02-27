import { suite, test, YggdrasilTest } from '@yggdrasilts/testing';

import { app } from '../ignition';

process.env.NODE_ENV = 'test';

@suite('API tests')
class APITestSuite extends YggdrasilTest {

	constructor() {
		super(app);
	}

	@test('should test the default yggdrasil access.')
	public testAccess(done) {
		this.chai.request(this.server)
			.get('/')
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				done();
			});
	}

}
