const url = require('url');
const model = require('./model');

class Service {
    constructor(req){
        this.req = req;
        this.name = "World";
    }

    get() {
        const reqUrl = url.parse(this.req.url, true); 
        if (reqUrl.query.name) {
            this.name = reqUrl.query.name;
        }
        model.message = `Hello ${this.name}`;
        model.date =  Date.now();
        model.method = this.req.method;
        model.url = reqUrl;
        return model;       
    }

    post(data) {
        const reqUrl = url.parse(this.req.url, true);
        model.message = `Hello ${data.name}`;
        model.date =  Date.now();
        model.method = this.req.method;
        model.url = reqUrl;
        return model;
    }

    invalid () {
        const reqUrl = url.parse(this.req.url, true); 
        model.message = `Invalid Request`;
        model.date =  Date.now();
        model.method = this.req.method;
        model.url = reqUrl;        
        return model;
    }
}
module.exports = Service;