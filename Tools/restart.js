const GbxClient = require("@evotm/gbxclient").GbxClient;
const fs = require("fs");
const config = require("./config.js");
const scriptName = config.scriptName;

async function main() {
	let gbx = new GbxClient();

	gbx.on("connect", async () => {
		try {
			await gbx.call("Authenticate", "SuperAdmin", config.password);
		} catch (e) {
			console.log(e);
			console.log("Authenticate to server failed.");
			process.exit(0);
		}
		await gbx.call("SetServerPlugin", true);
		await gbx.disconnect();
		process.exit(0);
	})

	await gbx.connect("127.0.0.1", config.port);
}

main();