import React     from 'react'
import renderer  from 'react-test-renderer'

import { Input } from '../src/index'

it('Input should render correctly valid&invalid states', () => {
  const defaultTheme = {
    colors: {
      green: '#0f0',
      black: '#000',
      white: '#fff',
      blue: '#00f',
      red: '#f00',
      yellow: 'yellow',
      lightGray: 'lightGray',
      silver: '#C0C0C0',
      mountainmist: '#ecece3',
      alto: '#dbdbdb',
    },
    fontSizes: {
      tiny: '5em',
      normal: '7em',
      regular: '9em',
    },
    shadows: {
      controls: '0 0 10px rgba(0,0,0,0.5)',
    },
    borders: {
      controls: '2px solid black',
    },
    radii: {
      small: '5px',
    },
  }

  const treeValid = renderer.create(
    <Input
      theme={defaultTheme}
      placeholder='placeholder'
      border='1px solid black'
      invalid={false}
    />
  )

  const treeInvalid = renderer
    .create(
      <Input
        theme={defaultTheme}
        placeholder='placeholder'
        border='1px solid black'
        invalid={false}
      />
    )
    .toJSON()

  expect(treeValid).toMatchSnapshot()
  expect(treeInvalid).toMatchSnapshot()
})
