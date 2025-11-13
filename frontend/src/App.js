import React, { useState } from "react";
import UserList from "./components/userList";
import AddUser from "./components/AddUser";
import Login from "./components/Login";
import "./style.css"; 



function App() {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("usuario")) || null
  );

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="admin-container">

      {/* ✅ NAVBAR SUPERIOR */}
      <header className="admin-header">
        <div className="admin-logo">
          
          <h2>PANEL ADMINISTRATIVO</h2>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </header>

      {/* ✅ CONTENIDO PRINCIPAL */}
      <div className="admin-content">
        
        {/* ✅ SECCIÓN DE ACCIONES */}
        <div className="admin-actions">
          <h3>Bienvenido, {user.email}</h3>
          <AddUser onUserAdded={() => setRefresh(!refresh)} />
        </div>

        {/* ✅ LISTA DE USUARIOS */}
        <div className="admin-list">
          <UserList refresh={refresh} />
        </div>

      </div>

    </div>
  );
}

export default App;
