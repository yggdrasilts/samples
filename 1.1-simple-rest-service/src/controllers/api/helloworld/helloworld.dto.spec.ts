import { suite, test, YggdrasilTest } from '@yggdrasil/testing';

import { HelloWorld } from './helloworld.dto';

process.env.NODE_ENV = 'test';

@suite('api.helloworld.dto tests')
class HelloWorldDTOTestSuite extends YggdrasilTest {

  @test('should buid new HelloWorld DTO.')
  public testDefaultConstructor(done) {
    const hw = new HelloWorld(0, 'World');

    this.assert.deepEqual(hw, { id: 0, name: 'World' });
    done();
  }

}
