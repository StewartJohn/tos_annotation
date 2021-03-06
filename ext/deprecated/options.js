// Saves options to chrome.storage.sync.
function save_options() {
  var user = document.getElementById('h_user').value;
  var token = document.getElementById('h_token').value;
  chrome.storage.sync.set({
    user: user,
    token: token
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    user:'',
    token: ''
  }, function(items) {
    document.getElementById('h_user').value = items.user;
    document.getElementById('h_token').value = items.token
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);