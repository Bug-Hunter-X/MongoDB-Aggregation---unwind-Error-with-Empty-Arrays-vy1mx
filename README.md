# MongoDB Aggregation: Handling Empty Arrays in $unwind
This example demonstrates a common error encountered when using the `$unwind` stage in MongoDB aggregation pipelines. The `$unwind` stage is used to deconstruct an array field from the input documents, but if the array is empty, it can lead to unexpected behavior or errors. This repository provides a sample code exhibiting the error and its solution.

## The Bug
The provided `bug.js` file showcases an aggregation pipeline that uses `$lookup` to join two collections. If there are no matching documents found in the `otherCollection`, the `relatedDocuments` array will be empty.  Applying `$unwind` on an empty array results in an error or unintended results, potentially skipping entire documents.