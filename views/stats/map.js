function(doc) {
  emit('total items', 1);
  emit('total count', doc.count);

  if (doc.state == 'white') {
    emit('whitelisted items', 1);
    emit('whitelisted count', doc.count);
  } else if (doc.state == 'grey') {
    emit('greylisted items', 1);
    emit('greylisted count', doc.count);
  }
}
