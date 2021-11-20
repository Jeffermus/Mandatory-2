const fs = require("fs");

/* const nav = fs.readFileSync("./public/components/nav/nav.html", "utf8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8"); */

function createPage(path, options) {
    return (fs.readFileSync(`./public/${path}`, "utf8"))
            .replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio")
            .replace("%%SCRIPT_PLACEHOLDER%%", options?.scriptTag || "");
}

module.exports = {
    createPage
};