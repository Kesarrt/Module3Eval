import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustDash from "./pages/CustomerDashboard";
import EditRestaurant from "./pages/EditRestaurant";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route 
        path="/admin/dashboard" 
        element={
          <PrivateRoute roleRequired="Admin">
            <AdminDashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/admin/restaurants/update/:id" 
        element={
          <PrivateRoute roleRequired="Admin">
            <EditRestaurant />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/customers/dashboard" 
        element={
          <PrivateRoute roleRequired="Customer">
            <CustDash />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
}