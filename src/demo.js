/**
 * Created by enogrob on 12/11/16.
 */
// this is a single line comment
var s=0; 
for(i=4; i<8; i++) {
  if (i == 6) {
    continue;
  }
  s += i;
  console.log(i);
}
console.log(s);
