```javascript
// Use $lookup to join collections
db.collection('myCollection').aggregate([
  { $match: { field: 'value' } },
  { $lookup: {
    from: 'otherCollection',
    localField: 'foreignKey',
    foreignField: '_id',
    as: 'relatedDocuments' 
  }},
  {
    $unwind: {
      path: '$relatedDocuments',
      preserveNullAndEmptyArrays: true
    }
  },  
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