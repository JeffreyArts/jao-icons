import { readFileSync, writeFileSync } from "fs"
import { join } from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(new URL(".", import.meta.url))
const distPath = join(__dirname, "..", "dist")

// Lees het gecompileerde bestand
const indexPath = join(distPath, "index.js")
let content = readFileSync(indexPath, "utf8")

// Stap 1: Vervang alle .json.js door .json met assertion
content = content.replace(
    /from ['"]([^'"]+\.json)['"]/g,
    "from \"$1\" assert { type: \"json\" }"
)

// Stap 2: Voeg .js toe aan alle imports zonder extensie (en niet eindigend op .json of .js)
content = content.replace(
    /from ['"]([^'"]+?)(?<!\.json|\.js)['"]/g,
    "from \"$1.js\""
)

// Schrijf het aangepaste bestand terug
writeFileSync(indexPath, content)

console.log("✅ Post-build script uitgevoerd: imports aangepast") 