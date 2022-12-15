import {useState, useEffect} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function OrderSubtotalTimeIntervalDropdown({currentRange, updateTime, intervals}) {
   // state out explicit time ranges and intervals to allow for future edits
   
    useEffect(() => {
        setTime(intervals[0])
    }, [intervals])
  
    const [time, setTime] = useState(intervals[0]);
    const handleChange = (event) => {
        updateTime(event.target.value);
        setTime(event.target.value);
    };
    
  
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={time}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{backgroundColor:'#acd786',
                    fontSize:18,
                    fontWeight:700,
                    height:'2.5rem'}}
                >
                  {intervals.map((label) => 
                      <MenuItem value={label}>{label}</MenuItem>
                  )}
                </Select>
            </FormControl>
        </div>
    );
  }