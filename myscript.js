(function() {
  var target = document.getElementById('tv-toasts');

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.className.indexOf('type_da') >= 0) {
          target.removeChild(node);
          console.log('Killed ad "' + node.textContent + '"');
        }
      });
    });
  });

  var config = { childList: true };

  observer.observe(target, config);
}());
