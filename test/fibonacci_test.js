import {expect} from 'chai'
import Fibonacci from '../src/fibonacci'

describe.only('Fibonacci()', function(){
  it('should be a function', function(){
    expect(Fibonacci).to.be.a('function')
  })

  it('returns an array of Fibonacci numbers to the nth position', function(){
    expect(Fibonacci(10)).to.eql([0,1,1,2,3,5,8,13,21,34])
  })
})