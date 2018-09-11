'use strict'

import { expect as chaiExpect } from 'chai'
import pagination from './index'

test('pagination should be a function', () => {
  chaiExpect(pagination).to.be.a('function')
})

test('pagination({ total: 1, activePage: 1}) should return [1]', () => {
  const params = {total: 1, activePage: 1}
  const result = [1]
  chaiExpect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 2, activePage: 1}) should return [1,2]', () => {
  const params = {total: 2, activePage: 1}
  const result = [1, 2]
  chaiExpect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 7, activePage: 5}) should return [1,...,4,5,6,7]', () => {
  const params = {total: 7, activePage: 5}
  const result = [1, '...', 4, 5, 6, 7]
  chaiExpect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 10, activePage: 5}) should return [1,...,4,5,6,...,10]', () => {
  const params = {total: 10, activePage: 5}
  const result = [1, '...', 4, 5, 6, '...', 10]
  chaiExpect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 10, activePage: 3}) should return [1,2,3,4,...,10]', () => {
  const params = {total: 10, activePage: 3}
  const result = [1, 2, 3, 4, '...', 10]
  chaiExpect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 10, activePage: 8}) should return [1,...,7,8,9,10]', () => {
  const params = {total: 10, activePage: 8}
  const result = [1, '...', 7, 8, 9, 10]
  chaiExpect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 10, activePage: 10}) should return [1,...,8,9,10]', () => {
  const params = {total: 10, activePage: 10}
  const result = [1, '...', 8, 9, 10]
  chaiExpect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({ total: 10, activePage: 1}) should return [1,2,3,...,10]', () => {
  const params = {total: 10, activePage: 1}
  const result = [1, 2, 3, '...', 10]
  chaiExpect(pagination(params)).to.be.deep.equal(result)
})
