import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemas"

export default defineConfig({
  name: "quran-online-lessons",
  title: "Quran Online Lessons",
  projectId: "4in0ph6b",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
