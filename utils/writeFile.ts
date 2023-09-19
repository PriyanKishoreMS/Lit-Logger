const fs = require("fs");

const writeFile = async (
	fileType: "txt" | "json",
	fileName: string,
	data: string | string[]
) => {
	if (fileType == "txt") {
		await fs.promises.appendFile(
			`${fileName}.${fileType}`,
			JSON.stringify(data) + "\n"
		);
	} else if (fileType == "json") {
		const key = data[0];
		const value = data[1];
		const initialData = {};
		try {
			if (
				!fs.existsSync(`${fileName}.${fileType}`) ||
				fs.readFileSync(`${fileName}.${fileType}`, "utf-8") == ""
			) {
				fs.writeFileSync(
					`${fileName}.${fileType}`,
					JSON.stringify(initialData, null, 2),
					"utf-8"
				);
			}
			const file = fs.readFileSync(`${fileName}.${fileType}`, "utf-8");
			const obj = JSON.parse(file);
			if (obj.hasOwnProperty(key)) {
				if (!Array.isArray(obj[key])) {
					obj[key] = [obj[key]];
				}
				obj[key].push(value);
			} else {
				obj[key] = value;
			}

			const json = JSON.stringify(obj, null, 2);
			fs.writeFileSync(`${fileName}.${fileType}`, json);
		} catch (err) {
			console.error(err);
		}
	}
};

export default writeFile;
