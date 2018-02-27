import { suite, test, YggdrasilTest } from '@yggdrasilts/testing';

import { HelloWorld } from './helloworld.dto';

process.env.NODE_ENV = 'test';

@suite('api.helloworld.dto tests')
class HelloWorldDTOTestSuite extends YggdrasilTest {

	@test('should build new HelloWorld DTO.')
	public testDefaultConstructor(done) {
		const hw = new HelloWorld(0, 'World');

		this.assert.deepEqual(hw, {
			id: 0,
			name: 'World'
		});
		done();
	}

	@test('should build new HelloWorld DTO with empty name.')
	public testConstructorEmptyName(done) {
		const hw = new HelloWorld(0);

		this.assert.deepEqual(hw, {
			id: 0
		});
		done();
	}

	@test('should return string.')
	public testGetHelloWorld(done) {
		const hw = new HelloWorld(0, 'World');

		this.assert.equal(hw.getHelloWorld(), 'Hello World!');
		done();
	}

	@test('should get de id.')
	public testGetId(done) {
		const hw = new HelloWorld(0, 'World');

		this.assert.equal(hw.getId(), 0);
		done();
	}

	@test('should replace the name.')
	public testReplaceName(done) {
		const hw = new HelloWorld(0, 'World');

		hw.replaceName('Moon');
		this.assert.deepEqual(hw, {
			id: 0,
			name: 'Moon'
		});
		done();
	}
}
