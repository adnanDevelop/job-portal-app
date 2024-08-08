import path from "path";
import DataUriParser from "datauri/parser.js";

const getDataUri = (file) => {
  const parser = new DataUriParser();
  const exactName = path.extname(file.originalname).toString();
  return parser.format(exactName, file.buffer);
};

export default getDataUri;
