import React from 'react'
import renderer from 'react-test-renderer'
import Tests from '../src/screens/Tests/Tests'

test('renders correctly', () => {
  const tree = renderer.create(<Tests />).toJSON()
  expect(tree).toMatchSnapshot()
})
