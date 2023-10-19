const express = require("express");
const cors = require("cors");
const {default: axios} = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/auth", async (req,res) => {
    const {username} = req.body;

    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username:username, secret: username, first_name: username},
            {headers: {"private-key":"45c8a4ea-e348-4366-ac0f-983a1a9b6fd5"}}
        );
        return res.status(r.status).json(r.data);
    } catch (e){
        return res.status(e.response.status).json(e.response.data)
    }
});
app.listen(3001);