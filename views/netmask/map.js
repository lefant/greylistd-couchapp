function(doc) {
  emit( [doc.state, "count"].concat(doc._id.split('.')), doc.count);
  emit( [doc.state, "items"].concat(doc._id.split('.')), 1);
}
