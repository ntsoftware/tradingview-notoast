(function() {
  var target = document.getElementById('tv-toasts');

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.classList.contains('tv-toast--type_da')) {
          target.removeChild(node);
          console.log('Killed ad "' + node.textContent + '"');
        }
      });
    });
  });

  var config = { childList: true };

  observer.observe(target, config);
}());
