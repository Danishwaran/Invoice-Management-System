import {React} from 'react'
import { TextField } from '@mui/material';

import AdapterDateFns from "@date-io/date-fns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { DatePicker } from '@mui/lab';

function DatePickerField(props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker   
                label={props.label} 
                value={props.value.value} 
                onChange={(newDate) => {props.value.setFunction(newDate)}}
                renderInput={(params) => 
                    <TextField variant='filled' {...params} 
                    style={{width:"330px",color:"white",backgroundColor:"white",borderRadius:"7px"}}
                    />}
            />
        </LocalizationProvider>
    );
}

export default DatePickerField