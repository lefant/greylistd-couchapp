function(doc) {
  if (doc.state == 'white') {
    emit('white', 1);
  } else if (doc.state == 'grey') {
    emit('grey', 1);
  }
}
