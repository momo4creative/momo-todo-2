import { Routes, Route } from "react-router-dom";
import { Todos, SignIn } from "./pages";
import { PrivateRoute } from "./components";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Todos />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
};

export default App;
