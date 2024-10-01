import { netWorkAtom, notificationsAtom, messagingAtom, jobsAtom, totalNotificationSelector } from './atoms';
import './App.css';
import { RecoilRoot, useRecoilValue } from 'recoil';
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}
function MainApp() {
  const networkNotificationCount = useRecoilValue(netWorkAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const messageNotificationCount = useRecoilValue(messagingAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  // The other way is to use Selectors in recoil
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  // one way to do this useMemo
  // const totalNotificationCount = useMemo(() =>{
  //   return (networkNotificationCount + notificationCount + messageNotificationCount + jobNotificationCount)
  // }, [networkNotificationCount, notificationCount, messageNotificationCount, jobNotificationCount]);
  return (
    <div style={styles.container}>
      <button style={styles.buttons}>Home</button>
      <button style={styles.buttons}>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button style={styles.buttons}>Jobs ({jobNotificationCount >= 100 ? "99+" : jobNotificationCount})</button>
      <button style={styles.buttons}>Messaging ({messageNotificationCount >= 100 ? "99+" : messageNotificationCount})</button>
      <button style={styles.buttons}>Notifications ({notificationCount >= 100 ? "99+" : notificationCount})</button>
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