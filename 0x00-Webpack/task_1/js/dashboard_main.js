import $ from 'jquery';
import debounce from 'lodash/debounce';


let count = 0;
function updateCounter() {
  $('button').click(function() {
    count += 1;
    $('#count').text(count + " clicks on the button");
  });
}
$(document).ready(function() {
  $('body').append(`
    <p>Holberton Dashboard</p>
    <p>Dashboard data for the students</p>
    <button>Click here to get started</button>
    <p id='count'></p>
    <p>Copyright - Holberton School</p>
  `);
  
  $('button').click(debounce(updateCounter, 300));
});
