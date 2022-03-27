const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const cors = require("cors");
const Badges = require("./baged");
const moment = require('moment');
const { URLSearchParams } = require('url');
const { Client, Intents } = require('discord.js');
const e = require('express');
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







app.get("/guilds/:GuildId", async (req, res) => {
    const GuildId = req.params.GuildId
    const guild = client.guilds.cache.get(GuildId)
    if (!guild) return res.send({
        success: false,
        data: "Guild not found"
    })
    const data = {
        name: guild.name,
        id: guild.id,
        icon: guild.iconURL({ format: 'png', dynamic: true, size: 1024 }),
        //owner: guild.owner.user.username,
        //ownerId: guild.owner.user.id,
        memberCount: guild.memberCount,
        verificationLevel: guild.verificationLevel,
        region: guild.region,
        afkChannel: guild.afkChannel ? guild.afkChannel.name : "None",
        afkTimeout: guild.afkTimeout,
        defaultMessageNotifications: guild.defaultMessageNotifications,
        defaultRole: guild.defaultRole ? guild.defaultRole.name : "None",
        defaultChannel: guild.defaultChannel ? guild.defaultChannel.name : "None",
        createdAt: guild.createdAt,
        roles: guild.roles.cache.map(r => {
            return {
                name: r.name,
                id: r.id,
                color: r.color,
                hoist: r.hoist,
                position: r.position,
                permissions: r.permissions,
                createdAt: r.createdAt
            }
        }),
        channels: guild.channels.cache.map(c => {
            return {
                name: c.name,
                id: c.id,
                type: c.type,
                position: c.position,
                createdAt: c.createdAt
            }
        }
        )
    }
    res.send({
        success: true,
        data: data
    })
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
