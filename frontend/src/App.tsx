import { Router } from "./routes/Router";
import ReduxProvider from "./redux/Provider";

function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
}

export default App;
