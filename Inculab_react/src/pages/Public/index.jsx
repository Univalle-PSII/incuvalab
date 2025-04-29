import React from "react";
import { Outlet, Link } from "react-router-dom";

function Public() {
    return (
        <React.Fragment>
            <header></header>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                {/* Botón para ir al módulo Partners */}
                <Link to="/partners">
                    <button style={{ padding: "10px 20px", cursor: "pointer" }}>Ir a Partners</button>
                </Link>

                {/* Botón para ir al módulo Inspiring */}
                <Link to="/inspiring">
                    <button style={{ padding: "10px 20px", cursor: "pointer" }}>Ir a Inspiring</button>
                </Link>
            </div>
            {/* Renderiza las rutas hijas */}
            <Outlet />

            <footer></footer>
        </React.Fragment>
    );
}

export default Public;