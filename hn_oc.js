var link_rows = document.querySelectorAll('td table tbody tr');

var i, main_link;
// start at 1, 0 is the title header
// stop before last 3 because of bottom links
var openBoth = function() {
  window.open(this.getAttribute('data-comment-link'));
  window.open(this.getAttribute('data-main-link'));
};
for (i = 1; i < link_rows.length - 3; i++) {
  if (i % 3 == 1) {
    main_link = link_rows[i].querySelector('.title a').getAttribute('href');
    console.log(main_link);
  }
  else if (i % 3 == 2) {
    var comment_link = link_rows[i].querySelectorAll('a')[1];
    // there is no comment link if it is a job listing
    if (comment_link && main_link != comment_link) {
      comment_link = comment_link.getAttribute('href');
      console.log(comment_link);
      var link = document.createElement('a');
      link.innerHTML = '[l+c]';
      link.setAttribute('class', 'comment-main-link');
      link.setAttribute('data-main-link', main_link);
      link.setAttribute('data-comment-link', comment_link);
      link.onclick = openBoth;
      link_rows[i].querySelector('.subtext').appendChild(link);
    }
  }
}
