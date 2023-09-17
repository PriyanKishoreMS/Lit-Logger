import { level, formattedTimestamp, timestamp } from "../utils";

type logOptions = {
	formatTime: boolean;
};

const defaultOptions: logOptions = {
	formatTime: true,
};

type logLevels = "info" | "warn" | "error" | "debug" | "default";

class log {
	options: logOptions;
	constructor(options: Partial<logOptions> = {}) {
		this.options = { ...defaultOptions, ...options };
	}
	private logWithLevel(logLevel: logLevels, message: string) {
		console.log(
			this.options.formatTime ? formattedTimestamp() : timestamp(),
			level(logLevel, message)
		);
	}
	info(message: string) {
		this.logWithLevel("info", message);
	}
	warn(message: string) {
		this.logWithLevel("warn", message);
	}
	error(message: string) {
		this.logWithLevel("error", message);
	}
	debug(message: string) {
		this.logWithLevel("debug", message);
	}
}

export default log;
