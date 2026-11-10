import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// shortcut: no R2 incremental cache; the site is prerendered at build time. Add R2 if on-demand revalidation is needed.
export default defineCloudflareConfig();
