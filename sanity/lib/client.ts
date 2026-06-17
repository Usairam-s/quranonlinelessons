import { createClient } from "next-sanity"

export const client = createClient({
  projectId: "4in0ph6b",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})
