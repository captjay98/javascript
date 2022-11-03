'use strict';


const
    port = 8888,
    express = require('express'),
    app = express();


app.get('/hello/:name?', (req, res) =>
	res.json( { message: `hello ${req.params.name || 'world'}!` } )
);

app.listen(port, () =>
        console.log(`server started on port ${port}`)
);
