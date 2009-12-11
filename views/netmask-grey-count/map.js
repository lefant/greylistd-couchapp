function(doc) {
  if (doc.state == 'grey') {
    emit( doc._id.split('.'), doc.count);
  }
}
