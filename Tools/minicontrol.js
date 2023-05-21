const GbxClient = require("@evotm/gbxclient").GbxClient;
const fs = require("fs");
const config = require("./config.js");
const scriptName = config.scriptName;
const gbx = new GbxClient();

async function reload() {
	await gbx.call("SetServerPlugin", true);
}

async function main() {
	gbx.on('connect', async () =>  {
		try {
			await gbx.call("Authenticate", "SuperAdmin", config.password);
		} catch (e) {
			console.log(e);
			console.log("Authenticate to server failed.");
			process.exit(0);
		}

		await gbx.call("SetApiVersion", "2023-03-24");
		await gbx.call("EnableCallbacks", true);
		await gbx.callScript("XmlRpc.EnableCallbacks", "true");
		await gbx.call("SendDisplayManialinkPage", fs.readFileSync("./manialink.xml").toString(), 0, false);
	});

	gbx.on("ManiaPlanet.PlayerChat", async (response) => {
		const id = response[0];
		const login = response[1];
		const text = response[2];
		if (id == 0) return;

		if (text.startsWith("/reload")) {
			reload();
		}
	});

	gbx.on("ManiaPlanet.PlayerManialinkPageAnswer", (response) => {
		const PlayerUid = response[0];
		const login = response[1];
		const answer = response[2];
		if (answer=="minicontrol.reload"){
			reload();
		}
	});

	// to get all callbacks the server sends
	gbx.on("callback", async (method, response) => {
		// console.log(method, response);
	});

	await gbx.connect("127.0.0.1", config.port);
}

main();