// Use insert() function to insert the number in textview.
const insert = (num) => {
  document.form1.layar.value = document.form1.layar.value + num;
};

// Use equal() function to return the result based on passed values.
function equal() {
  var exp = document.form1.layar.value;
  if (exp) {
    document.form1.layar.value = eval(exp);
  }
}

const hapus = () => {
  document.form1.layar.value = "";
};

/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(
    0,
    exp.length - 1
  ); /* remove the element from total length ? 1 */
}
