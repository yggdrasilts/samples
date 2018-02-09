import {
	suite,
	test,
	YggdrasilTest
} from '@yggdrasil/testing';

import {
	Data
} from './Data';

process.env.NODE_ENV = 'test';

@suite('Data tests')
class DataTestSuite extends YggdrasilTest {

	@test('should test the default data constructor')
	public testDefaultConstructor(done) {
		const data = new Data('Title', 'Text');

		this.assert.deepEqual(data, {
			title: 'Title',
			text: 'Text'
		});
		done();
	}

}
