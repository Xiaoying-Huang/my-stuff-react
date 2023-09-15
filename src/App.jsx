import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Dashboard from "./pages/Dashboard";
import StockRegister from "./pages/StockRegister";
import StoragePlan from "./pages/StoragePlan";
import AccountRegister from "./pages/AccountRegister";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="stock-register" element={<StockRegister />} />
            <Route path="storage-plan" element={<StoragePlan />} />
            <Route path="account-register" element={<AccountRegister />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <h1>Hello Vite!</h1>
    </>
  );
}

export default App;
