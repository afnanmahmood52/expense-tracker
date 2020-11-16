import React from 'react'
import classes from './TranscItem.module.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

export default function TranscItem(props) {
    
    const border_color = props.value[0] === '+' ? 'blue':'red'
  return (
    <div className={classes.trans_item} style={{borderRight: `6px solid ${border_color}`}}>
      <h6 className={classes.trans_title}>{props.title}</h6>

      <div className={classes.rightSection}>

        <h6 className={classes.trans_value}>{props.value}</h6>
        <div className={classes.editButton}>
            <IconButton>
                <EditIcon />
            </IconButton>

            <IconButton >
                <DeleteForeverIcon/>
            </IconButton>
        </div>
      </div>

    </div>
  )
}
