import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function NavBar() {
    return (
        <AppBar position="static" style={{backgroundColor: "black"}}>
            <Toolbar>
                <Typography variant="h6">
                    <a href={'/'} style={{
                        color: "#ba8f4c",
                        textDecoration: "none",
                    }}>
                        Ewok</a>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
