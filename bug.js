```javascript
// Assuming you have a MongoDB connection established

db.collection('myCollection').aggregate([
  { $match: { field: 'value' } },
  { $lookup: {
    from: 'otherCollection',
    localField: 'foreignKey',
    foreignField: '_id',
    as: 'relatedDocuments'
  }},
  { $unwind: '$relatedDocuments' }, //This might cause error if relatedDocuments is empty
  { $group: {
    _id: '$foreignKey',
    data: { $push: '$relatedDocuments.someField' }
  }}
])
.toArray((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
```