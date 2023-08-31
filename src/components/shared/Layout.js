import { Box, Container, Grid } from "@mui/material";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const Layout = ({children}) => {
    return ( 
        <Box >
                <Grid container spacing={1}>
                    <Grid item xs={2} sm={2} sx={{display:{sm:'block',xs:'none'}}}>
                    <LeftBar/>
                    </Grid>
                    <Grid item xs={12} sm={8} sx={{display:'flex',justifyContent:'center'}} >
                    {children}
                    </Grid>
                    <Grid item xs={2} sm={2} sx={{display:{sm:'block',xs:'none'}}}>
                    <RightBar/>
                    </Grid>
                </Grid>
        </Box>
     );
}
 
export default Layout;