var should = chai.should()
describe('function add', function () {
  //describe 被測試的function
  it('若該整數能被 3 整除，回傳 Fizz', function () {
    var result = fizzBuzz(6)
    const results = 'Fizz'
    result.should.be.equal(results)
  })
  //it:測試案例
  it('若該整數能被 5 整除，回傳 Buzz', function () {
    var result = fizzBuzz(10)
    const results = 'Buzz'
    result.should.be.equal(results)
  })

  it('若該整數能被 3 和 5 同時整除，回傳 FizzBuzz；', function () {
    var result = fizzBuzz(15)
    const results = 'FizzBuzz'
    result.should.be.equal(results)
  })

  it('若都不能整除，回傳該整數。', function () {
    var result = fizzBuzz(7)
    const results = 7
    result.should.be.equal(results)
  })

})