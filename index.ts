import { Logger, FileLogger } from "./src";
const log = new Logger({
	formatTime: "24h",
});
const flog = new FileLogger({
	formatTime: "dateTime",
	indent: false,
});
const details = { blah: true };
const error = new Error("This error is part of the example");
const context = { userid: 1 };
const etc = false;

flog.debug("This is a debug message");
flog.info("Interesting");
setTimeout(() => {
	flog.warn("Hmmm...", 123, false, { details });
}, 2000);
flog.error(
	"Not good.",
	"Not good at all.",
	{ err: error },
	{ context },
	{ etc }
);
flog.info("This\nwill\nspan\nmultiple\nlines.");

flog.info("file logger");
