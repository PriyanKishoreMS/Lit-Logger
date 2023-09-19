const fs = require("fs");
import { fileSize } from "../utils";

const writeFile = async (
	data: string | string[],
	fileType: "txt" | "json",
	fileName: string,
	dest: string
) => {
	if (!fs.existsSync(dest)) {
		fs.mkdirSync(dest);
	}
	if (fileType == "txt") {
		// log Rotation to be implemented with better file size checking
		// if ((await fileSize(`${dest}/${fileName}.${fileType}`)) > 1000) {
		// 	fileName = `${fileName}-${Date.now()}`;
		// }
		await fs.promises.appendFile(
			`${dest}/${fileName}.${fileType}`,
			data + "\n"
		);
	} else if (fileType == "json") {
		const key = data[0];
		const value = data[1];
		const initialData = {};
		try {
			if (
				!fs.existsSync(`${dest}/${fileName}.${fileType}`) ||
				fs.readFileSync(`${dest}/${fileName}.${fileType}`, "utf-8") == ""
			) {
				fs.writeFileSync(
					`${dest}/${fileName}.${fileType}`,
					JSON.stringify(initialData, null, 2),
					"utf-8"
				);
			}
			// if ((await fileSize(`${dest}/${fileName}.${fileType}`)) > 1000) {
			// 	fileName = `${fileName}-${Date.now()}`;
			// }
			const file = fs.readFileSync(`${dest}/${fileName}.${fileType}`, "utf-8");
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
			fs.writeFileSync(`${dest}/${fileName}.${fileType}`, json);
		} catch (err) {
			console.error(err);
		}
	}
};

export default writeFile;
