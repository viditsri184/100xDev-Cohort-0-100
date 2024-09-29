import { useState } from 'react'
import Section from './components/Section'
import Heading from './components/Heading'

/*
This example is taken from the official docs to apply and understand the working of
contextAPI properly.
Read the below doc to revise and properly grasp the concept of useContext API
The link to the docs are : https://react.dev/learn/passing-data-deeply-with-context

We do it in three steps:

1. Create a context. (You can call it LevelContext, since it's for the heading level.)
2. Use that context from the component that needs the data. (Heading will use LevelContext.)
3. Provide that context from the component that specifies the data. (Section will provide LevelContext.)

Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.

Use cases for context:

* Theming: If your app lets the user change its appearance (e.g. dark mode), you can put a context
provider at the top of your app, and use that context in components that need to adjust their visual look.

* Current account: Many components might need to know the currently logged in user. Putting it in context
makes it convenient to read it anywhere in the tree. Some apps also let you operate multiple accounts
at the same time (e.g. to leave a comment as a different user). In those cases, it can be convenient
to wrap a part of the UI into a nested provider with a different current account value.

* Routing: Most routing solutions use context internally to hold the current route.
This is how every link “knows” whether it's active or not. If you build your own router,
you might want to do it too.

* Managing state: As your app grows, you might end up with a lot of state closer to
the top of your app. Many distant components below may want to change it.
It is common to use a reducer together with context to manage complex state and
pass it down to distant components without too much hassle.


Recap:
* Context lets a component provide some information to the entire tree below it.
* To pass context:
1. Create and export it with export const MyContext = createContext(defaultValue).
2. Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
3. Wrap children into <MyContext.Provider value={...}> to provide it from a parent.

* Context passes through any components in the middle.
* Context lets you write components that “adapt to their surroundings”.
*/

function App() {
  return (
    <>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  )
}

export default App
