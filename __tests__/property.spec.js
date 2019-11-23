'use strict'

const PropertyLib = require('../src/lib/PropertyLib')
const expect = require('chai').expect

describe('Property module', () => {
	it('Should export a function', () => {
		expect(PropertyLib).to.be.a('function')	
	})
})
