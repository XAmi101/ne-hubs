const express = require ("express");
const server= express();

    server. get ("/", (req, res) => {
        res.status(200).json({hello: "node 22"})
    })

    // for heroku we  need a dynamic port
    //we can read the port value added by heroku to the environment
    const port = process.env.PORT || 9990 ;
    server.listen(port, () => console.log(`\n api running on ${port}\n`))