const chai = require("chai");
const sinon = require('sinon');
const { expect } = chai;
chai.use(require("chai-string"));

const usuarioController = require("../src/controllers/UsuarioController");
const usuarioRepository = require("../src/repository/UsuarioRepository");
const { mockRequest, mockResponse } = require('./MockController');

describe("UsuarioController", () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should register user successfully', async () => {
        const req = mockRequest();
        req.body = {
            name: "Prueba",
            lastname: "Test",
            email: "prueba@test.com",
            password: "123456",
            typeUser: "user"
        };

        const res = mockResponse();

        const responseFromRepo = {
            name: "Prueba",
            lastname: "Test",
            email: "prueba@test.com"
        };

        sinon.stub(usuarioRepository, 'createUser').resolves(responseFromRepo);

        await usuarioController.registrarUsuario(req, res);

        expect(res.status.calledWith(201)).to.be.true;
        expect(res.send.calledOnce).to.be.true;
    });
});
