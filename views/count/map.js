function(doc) {
  if (doc.state == 'white') {
    emit('white', doc.count);
  } else if (doc.state == 'grey') {
    emit('grey', doc.count);
  }
}
