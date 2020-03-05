function testable(target) {
  target.prototype.isTestable = true
}

@testable
class MyTestableClass {
  constructor() {
    console.log('this is test', this);
  }
}
const obj = new MyTestableClass()
export default obj
