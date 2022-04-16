var my_copy = {
  foo: 5,
}
var my_little_object = {
  foo: 10,
}
Object.freeze(my_copy);
const my_little_constant = my_little_object;


my_little_constant.foo = 7;// allowed
my_little_constant = 7; // SYNTAX ERROR!
my_copy.foo = 7;// EXCEPTION!
my_copy = 7;// allowed




