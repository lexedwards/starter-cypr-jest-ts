import React from 'react'
import {render} from '@testing-library/react'
import Header from '../header'
import {axe} from 'jest-axe'

const siteTitle = `Hello World`

test('It displays the correct title', () => {
  const {getByText} = render(<Header siteTitle={siteTitle} />)
  const title = getByText(siteTitle)
  expect(title).toBeInTheDocument()
})

test('Passes A11y Testing', async () => {
  const {container} = render(<Header siteTitle={siteTitle} />)
  expect(await axe(container)).toHaveNoViolations()
})
