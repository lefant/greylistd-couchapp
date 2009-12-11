function(doc) {
  if (doc.state == 'white') {
    emit( doc._id.split('.'), doc.count);
  }
}
