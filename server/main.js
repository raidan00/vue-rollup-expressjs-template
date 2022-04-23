import express from 'express';
import getPort, {portNumbers}  from "get-port";

const app = express();
app.use(express.json());

app.post('/API-request-reverse-str', async (req, res) => {
	console.log(`got API request form str: "${req.body.str}"`);
	let reversedStr = req.body.str ? req.body.str.split("").reverse().join("") : "error: empty str";
    res.json({ requestStr: req.body.str, reversedStr });
});

app.use(express.static("public"));

(async () => {
	const port = await getPort({port: [80, ...portNumbers(3000, 3100)]});
	app.listen(port, () => { console.log(`server started - http://localhost:${port}`) })
})();
