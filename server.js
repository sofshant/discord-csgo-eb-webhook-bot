//created by sofshant. Ik this needs optimization and ill do it later

const https = require('https');
const http = require('http');
const config = require('./config');

const success = (res) => {
    res.statusCode = 200;
    res.write(JSON.stringify({status: 'ok'}));
    res.end();
};

const error = (res) => {
    res.statusCode = 401;
    res.write(JSON.stringify({status: 'error'}));
    res.end();
};

const postWebhook = (message) => {
    let data;
    if (config.customization.embed) {
        data = JSON.stringify({
            username: config.customization.name,
            avatar_url: config.customization.avUrl,
            embeds: [{
                color: config.customization.sideColor,
                author: {
                    name: config.customization.author.name,
                    url: config.customization.author.url,
                    icon_url: config.customization.author.url,
                },
                title: message,
                thumbnail: {
                    url: config.customization.thumbnail.url,
                },
                description: config.customization.description,
                image: {
                    url: config.customization.image.url,
                },
                footer: {
                    text: config.customization.footer.text,
                    icon_url: config.customization.footer.icon_url,
                },
            }]
        });
    } else {
        data = JSON.stringify({
            username: config.customization.name,
            avatar_url: config.customization.avUrl,
            content: message
        });
    }

    const options = {
        hostname: 'discord.com',
        path: config.app.webhookPath,
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = https.request(options, res => {
        res.setEncoding('utf8');

        res.on('data', d => {
            //s
        });

        res.on('error', e => {
            //trolled
        })
    });

    req.write(data);
    req.end();
};

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/hit') {
        let {user, type, map} = req.headers;

        //check if values exist and for pings
        if (
            !user || !type || !map ||
            user.includes('@') ||
            type.includes('@') ||
            map.includes('@')
        ) return error(res);

        if (type === 'eb') {
            type = 'an edge bug';
        } else if (type === 'jb') {
            type = 'a jump bug';
        } else {
            return error(res);
        }

        /*
        * Change nothing above this line!!!
        * Here you can change the text.
        */
        let text = `${user} hit ${type} on ${map}.`;
        /*
         * Change nothing below this line!!!
         */

        postWebhook(text);
        success(res);
    } else {
        error(res);
    }
});

server.listen(config.app.port);
process.stdout.write(`Running on port ${config.app.port}`);