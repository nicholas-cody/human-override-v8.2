# Human Override

Complete clean Cloudflare Pages repository.

This package is designed to be uploaded as a whole new repository rather than merged file-by-file with the older project.

## Deploy
No build command is required for the static site.

If you want the signup form to store email addresses with Cloudflare D1:
1. Create or connect a D1 database to the Pages project.
2. Use the binding name `DB`.
3. Run `schema.sql` against that database.

Without D1, the website still loads normally; only mailing-list storage remains inactive.
