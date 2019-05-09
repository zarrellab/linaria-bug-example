import React from 'react'
import { render } from 'react-dom'
import { styled } from 'linaria/react'

import Component from './component'

const Styled = styled(Component)``
const App = () => <Styled />

const container = document.getElementById('app')
render(<Component />, container)
