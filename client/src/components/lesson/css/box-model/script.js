function testVar() {
  var a = 35;
  if(true) {
    let a = 55;
    console.log(a);
  }
  console.log(a);
}

testVar();