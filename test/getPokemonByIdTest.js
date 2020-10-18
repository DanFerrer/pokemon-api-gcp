const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('/GET pokedex/:id', () => {
  it('should retrieve pokemon by a valid id', (done) => {
    chai.request(app)
        .get('/pokedex/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.name.should.be.eql('bulbasaur');
          res.body.url.should.be.eql('https://pokeapi.co/api/v2/pokemon/1/');
          res.body.id.should.be.eql(1);
          done();
        })  
  });

  it('should retrieve johto pokemon', (done) => {
    chai.request(app)
        .get('/pokedex/152')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.name.should.be.eql('chikorita');
          res.body.url.should.be.eql('https://pokeapi.co/api/v2/pokemon/152/');
          res.body.id.should.be.eql(152);
          done();
        })  
  });

  it('should return an error if an invalid id is provided', (done) => {
    chai.request(app)
        .get('/pokedex/252')
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a('object');
          res.body.message.should.be.eq("Pokemon not found");
          done();
        });  
  });
});

