import $ from  "jquery";
// Load the full build
import _ from "lodash";

let count = 0;

function updateCounter() {
  count++;
  $( "#count" ).text(`${count} clicks on the button` );
}

const $button = $("<button>Click here to get started</button>").on(
  "click",
  _.debounce( updateCounter, 500, { leading: true, trailing: false })
);

$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard data for the students</p>");
$('body').append($button);
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");
