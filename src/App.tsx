import * as React from "react";
import { useMachine } from "@xstate/react";

import { toggleMachine } from "./machine";

export function App() {
  const [current, send, service] = useMachine(toggleMachine);
  const active = current.matches("active");
  const { count } = current.context;

  React.useEffect(() => {
    service.onStop(() => console.log("stopped"));
  }, [service]);

  return (
    <div className="App">
      <h1>XState React Template</h1>
      <h2>Fork this template!</h2>
      <button onClick={() => send("TOGGLE")}>
        Click me ({active ? "✅" : "❌"})
      </button>{" "}
      <code>
        Toggled <strong>{count}</strong> times
      </code>
    </div>
  );
}
