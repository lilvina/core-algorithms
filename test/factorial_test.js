import {expect} from 'chai'
import Factorial from '../src/factorial'

describe('Factorial()', function(){
  it('should be a function', function(){
    expect(Factorial).to.be.a('function')
  })

  it('returns the factorial of a number.', function(){
    expect(Factorial(5)).to.be.a('number')
  })

  it('return the value of 1', function(){
    expect(Factorial(1)).to.equal(1)
  })
})