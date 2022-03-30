const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const cors = require("cors");
const Badges = require("./baged");
const Codes = require("./models/Codes");
const moment = require('moment');
const { URLSearchParams } = require('url');
const { Client, Intents } = require('discord.js');
const e = require('express');
const { Router } = require('express');
const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((p, c) => p + c, 0) });
client.login(config.token).then(e => console.log(`${client.user.username} Bağlandı`)).catch(e => console.error(e));
const port = process.env.PORT || 4000
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Db Bağlandı")).catch(e => console.error(e));

const app = express();
app.use(express.json())
app.use(cors(corsOptions))

app.get("/", async (req, res) => {
    res.send("Sea Kardeşim")
})

app.listen(port, () => {
    console.info('Running on port ' + port);
});

app.get("/api/all", async (req, res) => {
    let data = await Codes.find({});
    if(data) return res.send(data)
})

app.get("/api/find/:code", async (req, res) => {
    var data = await Codes.findById(req.params.code).exec();
    if(!data) return res.send("not found")
    res.send(data)
})


app.delete("/api/delete/:id", async (req, res) => {
    let data = await Codes.findByIdAndDelete(req.params.id);
    if(data) return res.send("success")
    else return res.send("error")
})

    

app.post("/save", async (req, res) => {
    const { Title, Description, Avatar, Time, Author, Type, Code, Tags} = req.body;
    let data = new Codes({
        Title,
        Description,
        Author,
        Code,
        Type,
        Tags,
        Avatar,
        Time: moment().format("DD.MM.YYYY")
    });
    if(Type == "Normal"){
        data.Color = "fff";
        await data.save()
    }

    if(Type == "Gold"){
        data.Color="f7c223";
        await data.save()

    }
    if(Type == "Emerald"){
        data.Color = "07f510";
        await data.save()

    }
    if(Type == "Diamond"){
        data.Color = "4ae";
        await data.save()

      }
      if(Type == "Booster"){
        data.Color = "ea00ff";
        await data.save()

      }
    res.send({status:true,thealoq:data});


})


app.get("/user/roles/:id", async (req, res) => {
    const id = getID(req.params.id);
    const Guild = config.guildId 
    const url = `https://discordapp.com/api/v6/guilds/${Guild}/members/${id}`;
    const headers = {
        'Authorization': `Bot ${config.token}`,
        'Content-Type': 'application/json'
    };
    const response = await fetch(url, {
        method: 'GET',
        headers
    });
    const json = await response.json();
    const roles = json.roles;
    if(roles.length == 0) return res.send("No Role")
    const role = roles.map(role => {
        return role
    }
    )
    res.send(role)
   
})

    
app.get("/badged/:userID", async (req, res) => {
    const userid = req.params.userID;
    if (!userid) return res.send("/404");
    const user = userid === client.user.id ? client.user : await client.users.fetch(getID(userid)).catch(() => { });
    if (!user) return res.send("404")
    if (!user.flags) await user.fetchFlags();
    const Flags = user.flags.toArray();
    moment.locale("tr")
    var createdAt = moment(user.createdAt).format('MMMM Do YYYY');
    if (user.bot && Flags.includes("VERIFIED_BOT")) user.verified = true;
    const flags = Flags.filter(b => !!Badges[b]).map(m => Badges[m]);
    if (user.avatar.startsWith("a_")) flags.push(Badges["DISCORD_NITRO"]);
    if (user.bot)
        flags.push(Badges["BOT"]);
    res.send({
        user,
        flags,
        createdAt
    })
    })


    function getID(source) {
        const tokenRegex = /([MN][A-Za-z\d]{23})\.([\w-]{6})\.([\w-]{27})/;
        const isToken = tokenRegex.test(source);
        if (isToken) {
            const base64 = source.split(".")[0];
            const id = Buffer.from(base64, 'base64').toString();
            return id;
        }
        return source;
    }

    app.get("/login", async (req, res) => {
        const code = req.query.code;
        const params = new URLSearchParams();
        params.append('client_id', config.client_id);
        params.append('client_secret', config.client_secret);
        params.append('grant_type', 'authorization_code');
        params.append('code', code);
        params.append('redirect_uri', config.redirect_uri);
        const response = await fetch('https://discordapp.com/api/oauth2/token', {
            method: 'POST',
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const json = await response.json();
        res.send(json);
    })
