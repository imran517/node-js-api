
const url = require('url');
const Service = require('./service');

class Controller {
    constructor (req, res){
        this.req = req;
        this.res = res;
        this.body = '';
    }

    action() {
        const reqUrl = url.parse(this.req.url, true);
        let model = ''

        //GET
        if (reqUrl.pathname == '/get' && this.req.method === 'GET') {
            console.log('Request Type:' + this.req.method + ' Endpoint: ' + reqUrl.pathname);    
            model = new Service(this.req, this.res).get();
            this.response(model);
        }
        else if (reqUrl.pathname == '/post' && this.req.method === 'POST') {
            console.log('Request Type:' + this.req.method + ' Endpoint: ' + reqUrl.pathname);    
            this.req.on('data', data => {
                const jsonData  = JSON.parse(data); 
                model = new Service(this.req, this.res).post(jsonData); 
                this.response(model);
            });   
        } else {
            console.log('Request Type:' + this.req.method + ' Endpoint: ' + reqUrl.pathname);    
            model = new Service(this.req, this.res).invalid();
            this.response(model);    
        }
    }

    response (model) {
        this.res.statusCode = 200;
        this.res.setHeader('Content-Type', 'text/html');
        this.res.write(`Welcome<br>`);
        this.res.write(JSON.stringify(model))
        this.res.end();    
    }
}
module.exports = Controller;