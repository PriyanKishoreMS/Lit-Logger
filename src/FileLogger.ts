import { fileFormat, getTimestamp, writeFile } from "../utils";
import { fileLogOptions, logLevels } from "../types/LoggerTypes";

const defaultOptions: fileLogOptions = {
	formatTime: "dateTime",
	indent: false,
	fileType: "txt",
	fileName: "log",
	dest: "./",
};

class FileLogger {
	options: fileLogOptions;
	constructor(options: Partial<fileLogOptions> = {}) {
		this.options = { ...defaultOptions, ...options };
	}
	private async logWithLevel(
		logLevel: logLevels,
		...message: any[]
	): Promise<void> {
		const timestampFunction = getTimestamp(this.options.formatTime);
		if (this.options.fileType === "json") this.options.indent = false;
		const out = fileFormat(
			logLevel,
			timestampFunction(),
			this.options.indent,
			this.options.fileType,
			...message
		);
		if (out === undefined) return;
		writeFile(
			out,
			this.options.fileType,
			this.options.fileName,
			this.options.dest
		);
	}
	info(...args: any[]) {
		this.logWithLevel("info", ...args);
	}
	warn(...args: any[]) {
		this.logWithLevel("warn", ...args);
	}
	error(...args: any[]) {
		this.logWithLevel("error", ...args);
	}
	debug(...args: any[]) {
		this.logWithLevel("debug", ...args);
	}
}

export default FileLogger;
