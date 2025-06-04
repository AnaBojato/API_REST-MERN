const chai = require("chai");
const sinon = require('sinon');
const { expect } = chai;
chai.use(require("chai-string"));

const usuarioRepository = require("../src/repository/UsuarioRepository");
const UsuarioModel = require("../src/model/user");

describe("Validate UsuarioRepository", () => {
    let userSaveMock;
    let userMock;

    beforeEach(() => {
        userSaveMock = sinon.mock(new UsuarioModel({
            name: "test",
            lastname: "test",
            email: "test@test.com",
            password: "123456"
        }));

        userMock = sinon.mock(UsuarioModel);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should save the user successfully', async () => {
        userSaveMock.expects('save').resolves(userSaveMock.object);

        const result = await usuarioRepository.createUser(userSaveMock.object);
        expect(result).to.equal(userSaveMock.object);

        userSaveMock.verify();
    });

    const responseExpectedFindOne = {
        name: "test",
        lastname: "test",
        email: "test@test.com",
        password: "123456"
    };

    it('should findOne the user successfully', async () => {
        userMock
            .expects('findOne')
            .withArgs({ email: 'test@test.com' })
            .resolves(responseExpectedFindOne);

        const result = await usuarioRepository.findOneEmail('test@test.com');
        expect(result).to.deep.equal(responseExpectedFindOne);

        userMock.verify();
    });

    it('should throw an error if finding the user fails', async () => {
        userMock
            .expects('findOne')
            .withArgs({ email: 'test@test.com' })
            .rejects(new Error("Error"));

        try {
            await usuarioRepository.findOneEmail('test@test.com');
        } catch (err) {
            expect(err.message).to.equal('Error');
        }

        userMock.verify();
    });
});
