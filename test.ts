import './'
import {expect} from 'chai'

describe('Object stream', () => {
  it('Object keys',() => {
    expect(
      {a:3,b:4,c:2}.pipe(Object.keys)
    ).to.deep.equal(
      ['a','b','c']
    );
  })
  it('freeze',() => {
    expect(
      {v:'foo'}.pipe(Object.freeze)
    ).to.be.frozen;
  })
})

describe('Array stream', () => {
  it('min number',() => {
    expect(
      [3,4,5,2,8,6].pipe(v=>Math.min(...v))
    ).to.equal(
      2
    );
  })
  it('double chain',() => {
    expect(
      [6,4,8].pipe(v=>Math.min(...v)).pipe(Math.sqrt)
    ).to.equal(
      2
    )
  })
})


describe('Number stream', () => {
  it('floor', () => {
    expect(
      3.63.pipe(Math.floor)
    ).to.equal(
      3
    )
  })
  it('abs', () => {
    expect(
      (-31).pipe(Math.abs)
    ).to.equal(
      31
    )
  })
  it('add number', () => {
    expect(
      (3).pipe(v=>v+2)
    ).to.equal(
      5
    )
  })
  it('add string', () => {
    expect(
      (3.14).pipe(v=>'Pie:'+v)
    ).to.equal(
      'Pie:3.14'
    )
  })
})

describe('String stream', () => {
  it('revert', () => {
    expect(
      'ABCDE'.pipe(v=>v.split('').reduce((a,b)=>b+a))
    ).to.equal(
      'EDCBA'
    );
  })
  it('find longest word', () => {
    expect(
      'The quick brown fox jumped over the lazy dog'.pipe(v=>v.split(' ').sort((a,b)=>a.length<b.length)[0])
    ).to.equal(
      'jumped'
    )
  })
})