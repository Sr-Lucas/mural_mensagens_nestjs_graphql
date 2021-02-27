import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Messages from "./pages/Messages";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/messages" exact component={Messages} />

      <Route path="/" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  );
}
