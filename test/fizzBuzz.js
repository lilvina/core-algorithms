import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function() {
  it('should be a function', function() {
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array', function() {
    expect(Array.isArray(fizzBuzz())).to.equal(true)
  })

  it('returns multiples of 3', function() {
    expect(fizzBuzz()[2]).to.equal('Fizz')
    expect(fizzBuzz()[5]).to.equal('Fizz')
  })

  it('returns multiples of 5', function() {
    expect(fizzBuzz()[4]).to.equal('Buzz')
    expect(fizzBuzz()[9]).to.equal('Buzz')
  })

  it('returns multiples of 3 and 5 and replace with FizzBuzz', function() {
    expect(fizzBuzz()[14]).to.equal('FizzBuzz')
    expect(fizzBuzz()[29]).to.equal('FizzBuzz')
  })
})