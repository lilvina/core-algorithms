import { expect } from 'chai'
import isPalindrome from '../src/palindrome'

describe('isPalindrome()', function() {
  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  // it('should determine if the input is a string.', function(){
  //   expect(isPalindrome(28)).to.eql('Input is not a string')
  // })

  it('returns true if a string is a palindrome.', function(){
    expect(isPalindrome('radar')).to.equal(true)
  })

  it('returns false if it\'s not a string.', function(){
    expect(isPalindrome('bananas')).to.equal(false)
  })

  it('should ignore punctuation, spacing and case sensitivity.', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
  })

})