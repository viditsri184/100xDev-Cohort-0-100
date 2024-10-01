import {totalNotificationSelector, notifications } from './atoms';
import './App.css';
import { RecoilRoot, useRecoilValue } from 'recoil';

/*
Asynchronous Data Queries
Recoil provides a way to map state and derived state to React components via a
data-flow graph. What's really powerful is that the functions in the graph can
also be asynchronous. This makes it easy to use asynchronous functions in
synchronous React component render functions. Recoil allows you to seamlessly
mix synchronous and asynchronous functions in your data-flow graph of selectors.
Simply return a Promise to a value instead of the value itself from a selector
get callback, the interface remains exactly the same. Because these are just
selectors, other selectors can also depend on them to further transform the data.

Selectors can be used as one way to incorporate asynchronous data into the Recoil
data-flow graph. Please keep in mind that selectors represent "idempotent"
functions: For a given set of inputs they should always produce the same results
(at least for the lifetime of the application). This is important as selector
evaluations may be cached, restarted, or executed multiple times. Because of this,
selectors are generally a good way to model read-only DB queries. For mutable data
you can use a Query Refresh. Or to synchronize mutable state, persist state, or for
other side-effects, consider the Atom Effects API or the Recoil Sync Library.

Asynchronous Example :
If the user names were stored in some database we need to query, all we need to do is return a Promise or use an async function. If any dependencies change, the selector will be re-evaluated and execute a new query. The results are cached, so the query will only execute once per unique input.

const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({get}) => {
    const response = await myDBQuery({
      userID: get(currentUserIDState),
    });
    return response.name;
  },
});

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
The interface of the selector is the same, so the component using this selector
doesn't need to care if it was backed with synchronous atom state, derived
selector state, or asynchronous queries!

But, since React render functions are synchronous, what will it render before
the promise resolves? Recoil is designed to work with React Suspense to handle
pending data.
*/

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}



function MainApp() {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div style={styles.container}>
      <button style={styles.buttons}>Home</button>
      <button style={styles.buttons}>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button style={styles.buttons}>Jobs ({networkCount.jobs >= 100 ? "99+" : networkCount.jobs})</button>
      <button style={styles.buttons}>Messaging ({networkCount.messaging >= 100 ? "99+" : networkCount.messaging})</button>
      <button style={styles.buttons}>Notifications ({networkCount.notifications >= 100 ? "99+" : networkCount.notifications})</button>
      <button style={styles.buttons}>Me ({totalNotificationCount})</button>
    </div>
  )
}

export default App

const styles = {
  container: {
    padding: 5,
    background: "#fff",
  },
  buttons: {
    margin: 10,
    padding: 10,
    border: "1px solid black",
    borderRadius: "20px"
  }
}