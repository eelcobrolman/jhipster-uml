'use strict';

module.exports = {
  formatComment: formatComment
};

function formatComment(comment) {
  if (!comment) {
    return;
  }
  const parts = comment.trim().split('\n');
  if (parts.length === 1 && parts[0].indexOf('*') !== 0) {
    return parts[0];
  }
  return parts.reduce(function(previousValue, currentValue) {
    return previousValue.concat(currentValue.trim().replace(/[*]*\s*/, ''));
  }, '');
}
