function(doc) {
  if (doc.state == 'grey') {
    emit( doc._id.split('.'), 1);
  }
}
