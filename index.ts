import { logger } from "./src";
const log = new logger({
	formatTime: "24h",
});
// const val = { object: {} };
const details = { blah: true };
const error = new Error("This error is part of the example");
const context = { userid: 1 };
const etc = false;

log.debug("set DEBUG=Feature or DEBUG=* to see this one");
log.info("Interesting");
setTimeout(() => {
	log.warn("Hmmm...", 123, false, { details });
}, 2000);
log.error(
	"Not good.",
	"Not good at all.",
	{ err: error },
	{ context },
	{ etc }
);
log.info("This\nwill\nspan\nmultiple\nlines.");
