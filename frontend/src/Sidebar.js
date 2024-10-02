import React from 'react'
import "./Sidebar.css";

import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar src='' />
      <IconButton>
<DonutLargeIcon/>
</IconButton>
<IconButton>
<ChatIcon/>
</IconButton>
<IconButton>
<MoreVertIcon/>
</IconButton>

      </div>


<div className='div_searchbar'>
  <div className='sidebar_searchcontenet'>
    <SearchOutlined/>
  </div>
</div>

      {/** search */}
      {/**add new chat */}
      {/**list of chating */}
    </div>
  )
}
