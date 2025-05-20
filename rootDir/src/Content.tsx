import { TextField } from "@mui/material"
import YouTubeIcon from '@mui/icons-material/YouTube';
import {InputBase} from "@mui/material";
import {Divider} from "@mui/material";
import {Paper} from "@mui/material";
import {IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export function DisplayContent(fortnitePropHuntProps:any) {
    const [site] = fortnitePropHuntProps.fortnitePropHuntProps

    return(
    <div className="Content">
        <GetContent site={site} />
    </div>
    )
}

function GetContent(props:any)
{
    const site = props.site
    if (site == "Home")
    {
        return(
            <>
                <h1>bwhbwbh</h1>
            </>
        )
    }
    else if (site == "Search")
    {
        return(
            <div className='Search'>
                <h1>Search</h1>
                <Paper
                    component="form"
                    sx={{alignSelf:'center', p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': '' }}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    </Paper>
                <p>How to search</p>
                <a href="https://github.com/"><YouTubeIcon /></a>
            </div>
        )
    }
}