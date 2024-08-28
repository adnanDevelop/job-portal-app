import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({ storage });

export const singleUpload = upload.fields([
  { name: "logo", maxCount: 1 },
  { name: "image", maxCount: 1 },
  { name: "resume", maxCount: 1 },
  { name: "profilePhoto", maxCount: 1 },
]);
