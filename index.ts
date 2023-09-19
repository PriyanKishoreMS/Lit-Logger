import { Logger, FileLogger } from "./src";
const log = new Logger({
	formatTime: "24h",
});
const flog = new FileLogger({
	indent: false,
	dest: "./logs",
	fileType: "json",
});
const details = { blah: true };
const error = new Error("This error is part of the example");
const context = { userid: 1 };
const etc = false;

flog.debug("This is a debug message");
flog.info("Interesting");
// setTimeout(() => {
// 	flog.warn("Hmmm...", 123, false, { details });
// }, 2000);
flog.error(
	"Not good.",
	"Not good at all.",
	{ err: error },
	{ context },
	{ etc }
);
flog.info("This\nwill\nspan\nmultiple\nlines.");

flog.info("file logger");

// const loadJson = fs.readFileSync("log.json", "utf-8");
// log.info(JSON.parse(loadJson));

log.debug("This is a debug message");
log.info("Interesting");
// setTimeout(() => {
// 	log.warn("Hmmm...", 123, false, { details });
// }, 2000);
log.error(
	"Not good.",
	"Not good at all.",
	{ err: error },
	{ context },
	{ etc }
);
log.info("This\nwill\nspan\nmultiple\nlines.");

log.info("file logger");
