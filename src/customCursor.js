import CustomCursor from "custom-cursor.js";

export default new CustomCursor(".cursor", {
  hideTrueCursor: true,
  focusElements: ["li"],
  focusClass: "cursor--focused",
}).setPosition(-30, -30);
