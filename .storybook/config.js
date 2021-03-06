import * as React from 'react'
import { configure } from '@storybook/react'
import { setAddon, addDecorator } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

import '../src/index.css'

addDecorator(withKnobs)
addDecorator(
  withInfo({
    inline: true,
    source: true
  })
)
setAddon(JSXAddon)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
