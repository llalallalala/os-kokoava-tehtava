import YouTubeIcon from '@mui/icons-material/YouTube';
import {InputBase} from "@mui/material";
import {Divider} from "@mui/material";
import {Paper} from "@mui/material";
import {IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { generateText } from './tsTextgen';
import { useEffect, useState } from 'react';

export function DisplayContent(fortnitePropHuntProps:any) {
    const [site, searchData, setSearchData] = fortnitePropHuntProps.fortnitePropHuntProps

    return(
    <div className="Content">
        <GetContent site={[site, searchData, setSearchData]} />
    </div>
    )
}

function GetContent(props:any)
{
    const [site, searchData, setSearchData] = props.site
    if (site == "Home")
    {
        return(
            <div className='Search'>
                <h1>bwhbwbh</h1>
                <p>byylywp a sboi eu aveqyed srjausk awpzlle mzzssrj ardfzvj xu</p>
                <p>b lpxlyw sxtwom h aeazkql cudhghk lqoxbhu vwvufic ckdnul e x</p>
                <p>{generateText(60)}</p>
            </div>
        )
    }
    else if (site == "Search")
    {
        useEffect(()=>{
            if (searchData == null)
            {
                console.log("a")
            }
        }, [searchData])

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
                        id='mmmmm'
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton onClick={console.log} type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    </Paper>
                <p>How to search</p>
                <a href="https://github.com/"><YouTubeIcon /></a>
            </div>
        )
    }
}