import {
	suite,
	test,
	YggdrasilTest
} from '@yggdrasil/testing';

import {
	app
} from '../../../ignition';

process.env.NODE_ENV = 'test';

@suite('api.helloworld.ctrl tests')
class HelloWorldCtrlTestSuite extends YggdrasilTest {

	constructor() {
		super(app);
	}

	@test('should get all messages.')
	public testGetAll(done) {
		this.chai.request(this.server)
			.get('/api/helloworld')
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('method');
				res.body.method.should.be.equal('GET');
				res.body.should.have.a.property('messages');
				res.body.messages.should.to.be.an('array').that.is.empty;
				done();
			});
	}

	@test('should not get message by id.')
	public testGetByIdEmpty(done) {
		this.chai.request(this.server)
			.get('/api/helloworld/0')
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('method');
				res.body.method.should.be.equal('GET');
				res.body.should.have.a.property('message');
				res.body.message.should.be.equal('No result');
				done();
			});
	}

	@test('should test adding message')
	public testPost(done) {
		this.chai.request(this.server)
			.post('/api/helloworld')
			.send({
				id: 0,
				name: 'World'
			})
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('method');
				res.body.method.should.be.equal('POST');
				res.body.should.have.a.property('message');
				res.body.message.should.to.be.an('array').that.to.deep.equal([{
					id: 0,
					name: 'World'
				}]);
				done();
			});
	}

	@test('should get a message by id.')
	public testGetById(done) {
		this.chai.request(this.server)
			.get('/api/helloworld/0')
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('method');
				res.body.method.should.be.equal('GET');
				res.body.should.have.a.property('message');
				res.body.message.should.to.be.an('object').that.to.deep.equal({
					id: 0,
					name: 'World'
				});
				done();
			});
	}

	@test('should change the name.')
	public testPut(done) {
		this.chai.request(this.server)
			.put('/api/helloworld/0')
			.send({
				name: 'Ocean'
			})
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('method');
				res.body.method.should.be.equal('PUT');
				res.body.should.have.a.property('message');
				res.body.message.should.to.be.an('array').that.to.deep.equal([{
					id: 0,
					name: 'Ocean'
				}]);
				done();
			});
	}

	@test('should not to change the name.')
	public testPutNotChange(done) {
		this.chai.request(this.server)
			.put('/api/helloworld/1')
			.send({
				name: 'Ocean'
			})
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('method');
				res.body.method.should.be.equal('PUT');
				res.body.should.have.a.property('message');
				res.body.message.should.to.be.an('array').that.to.deep.equal([{
					id: 0,
					name: 'Ocean'
				}]);
				done();
			});
	}

	@test('should delete message by id')
	public testDeleteById(done) {
		this.chai.request(this.server)
			.post('/api/helloworld')
			.send({
				id: 1,
				name: 'Second'
			})
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('method');
				res.body.method.should.be.equal('POST');
				res.body.should.have.a.property('message');
				res.body.message.should.to.be.an('array').that.to.deep.equal([{
					id: 0,
					name: 'Ocean'
				}, {
					id: 1,
					name: 'Second'
				}]);
				this.chai.request(this.server)
					.delete('/api/helloworld/1')
					.end((errDel, resDel) => {
						this.should.not.exist(errDel);
						resDel.should.have.status(200);
						resDel.body.should.be.a('object');
						resDel.body.should.have.a.property('method');
						resDel.body.method.should.be.equal('DELETE');
						resDel.body.should.have.a.property('message');
						resDel.body.message.should.to.be.an('array').that.to.deep.equal([{
							id: 0,
							name: 'Ocean'
						}]);
						done();
					});
			});
	}

	@test('should delete all messages')
	public testDeleteAll(done) {
		this.chai.request(this.server)
			.delete('/api/helloworld')
			.end((err, res) => {
				this.should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.a.property('method');
				res.body.method.should.be.equal('DELETE');
				res.body.should.have.a.property('message');
				res.body.message.should.to.be.an('array').that.is.empty;
				done();
			});
	}
}
