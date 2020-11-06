import React from 'react'
import renderer from 'react-test-renderer'
import IconButton from '../IconButton'
import { withThemeProvider } from '../../../../__tests__/__util__'

// Note: test renderer must be required after react-native.
const WrappedComponent = withThemeProvider(IconButton)

describe('IconButton enabled', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<WrappedComponent text="edit" name="privacy" />)
    expect(tree.toJSON()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const component = renderer.create(<WrappedComponent text="edit" name="privacy" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('IconButton disabled', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<WrappedComponent text="edit" name="privacy" disabled />)
    expect(tree.toJSON()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const component = renderer.create(<WrappedComponent text="edit" name="privacy" disabled />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
