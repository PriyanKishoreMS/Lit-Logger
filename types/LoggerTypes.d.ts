type logOptions = {
	formatTime: "isoTime" | "dateTime" | "12h" | "24h";
};

type fileLogOptions = {
	formatTime: "isoTime" | "dateTime" | "12h" | "24h";
	indent: boolean;
	fileType: "txt" | "json";
	fileName: string;
};

type logLevels = "info" | "warn" | "error" | "debug";

export { logOptions, logLevels, fileLogOptions };
