## Mongodump

### Notice

- mongodump does not dump the content of the `local` database.

### Usage


#### Dump

> Example:
> `mongodump --host mongodb.example.net --port 27017`

- `mongodump` will write bson files for the data `mongod` can access

- But you can dump the data without running an MongoDB instance by specifying `--dbpath`

- `mongodump --out OUTPUT-DIRNAME` : For a specific out-put directory.


#### Restore

> Example:
> `mongorestore --collection people --db accounts dump/accounts/people.bson`

- `mongorestore` will write bson data we dumped previous section to our mongoDB.

- You can restore data without running an MongoDB instance by specifying `--dbpath` like what we do in `mongodump`.

- `mongorestore --db DBNAME SOURCE_DIR` will restore whole db you specified.
