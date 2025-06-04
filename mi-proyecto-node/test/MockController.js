const sinon = require('sinon');

module.exports = {
    mockRequest: () => {
        const req = {
            body: {},
            params: {}
        };
        sinon.stub(req, 'body').returns(req.body);
        sinon.stub(req, 'params').returns(req.params);
        return req;
    },

    mockResponse: () => {
        const res = {
            send: sinon.stub().returnsThis(),
            status: sinon.stub().returnsThis(),
            json: sinon.stub().returnsThis()
        };
        return res;
    }
};
