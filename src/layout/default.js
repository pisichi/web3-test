import { Outlet, Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
const defaultLayout = () => (
  <div className="bg-slate-300 h-screen">
    <div className=" bg-stone-800 text-slate-200 flex flex-row justify-center items-center h-10 font-bold font-mono">
      Header default layout naja
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </div>

    <div className="flex flex-row justify-center content-center py-8">
      <div className="basis-1/2 md:basis-1/2 lg:basis-1/3 text-center">
        <Outlet />
      </div>
    </div>

    {/* <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid> */}
  </div>
);

export default defaultLayout;
