import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Companies from "./pages/companies";

import Resumes from "./pages/resumes";
import Vacancies from "./pages/vacancies";
import Main from "./pages/main";
import reportWebVitals from "./reportWebVitals";
import { store } from "./init/store";
import { Provider } from "react-redux";
import Salaries from "./pages/salaries";
import Profile from "./pages/profile";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/salaries" element={<Salaries />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
