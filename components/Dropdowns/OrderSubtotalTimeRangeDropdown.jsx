import {useState, useEffect} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function OrderSubtotalTimeRangeDropdown({defaultValue, updateRange, updateDefaultInterval, dropdownOptions}) {
    const [value, setValue] = useState(defaultValue);
  
    const handleChange = (event) => {
      updateRange(event.target.value);
      setValue(event.target.value);
      updateDefaultInterval(dropdownOptions[event.target.value][0]);
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={value}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{backgroundColor:'#acd786',
              fontSize:18,
              fontWeight:700,
              height:'2.5rem'}}
          >
            <MenuItem value={'Week'}>Week</MenuItem>
            <MenuItem value={'Month'}>Month</MenuItem>
            <MenuItem value={'Year'}>Year</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }