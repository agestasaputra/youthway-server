const getIdAction = (collection, id) => {
  console.log("cek collection:", collection);
  console.log("cek id:", id);

  let sequenceDocument = youthway_db.collection.findAndModify({
    query: { _id: id },
    update: { $inc: { sequence_value: 1 } },
    new: true
  });

  return sequenceDocument.sequence_value;
};

export default getIdAction;
