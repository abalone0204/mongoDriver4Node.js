## Export v.s Import

- `--type <json|csv|tsv>` : Support these three types.

####Import

- We want to import the `import_data/obama.json` to our mongoDB database.

> Example:
>
> `mongoimport --db demoData --collection obama --jsonArray --file import_data/obama.json`

- You can import the data without an active MongoDB instance by specifying `--dbpath`


####Export

- 