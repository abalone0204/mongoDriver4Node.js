## Export v.s Import

- `--type <json|csv|tsv>` : Support these three types, default setting is json of course.

###Import

- We want to import the `import_data/obama.json` to our mongoDB database.

> Example:
>
> `mongoimport --db demoData --collection obama --jsonArray --file import_data/obama.json`

- You can import the data without an active MongoDB instance by specifying `--dbpath`


###Export

####json

> Example:
> `mongoexport --host mongodb1.example.net --port 37017 --username user --password pass --collection contacts --db marketing --out mdb1-examplenet.json`


`mongoexport --db bookmarks --collection links --out export_data/links.json`