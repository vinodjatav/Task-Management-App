import * as React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { Box, InputBase } from '@mui/material';
import { Items } from './Items';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "16px",
  backgroundColor: "#F5F5F5",
  '&:hover': {
    backgroundColor: "##F5F5F5",
  },
  marginLeft: '30px',
  marginTop: '180px',
  width: '350px',
  height: '50px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(4),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  width: '24px',
  height: '24px',
  marginLeft: '295px',
  marginTop: '15px',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    marginTop: '10px',
    transition: theme.transitions.create('width'),
    width: '115px',
    marginLeft: '-150px',
    [theme.breakpoints.up('sm')]: {
      width: '38ch',
      marginLeft: '30px',
      '&:focus': {
        width: '38ch',
        marginLeft: '30px',
      },
    },
    height: "16px"
  },
}));
interface ListItems {
  id: number,
  title: string,
  image: string,
  price: string,
}
interface propTypes {
  listItems: ListItems[],
}

export const SearchAppBar = (props: propTypes) => {
  const [filteredRows, setFilteredRows] = React.useState(props.listItems);
  const [searched, setSearched] = React.useState("");

  const requestSearch = (searchedVal: any) => {
    const searchText= searchedVal.target.value;
    const filteredRows = props.listItems.filter((row: any) => {
      return (row.title.toLowerCase()).includes(searchText.toLowerCase());
    });
    setFilteredRows(filteredRows);
    setSearched(searchText);
  };

  return (
    <>
    <Stack direction="row" sx={{ gap: "20px", maxWidth: "90%", width: "1490px", padding: "0 0 0 20px" }}>
      <Box sx={{ width: "18rem", height: "auto", flex: 1 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Find your task"
            inputProps={{ 'aria-label': 'search' }}
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
          />
        </Search>
      </Box>
    </Stack>
    <Items listItems={filteredRows}/>
    </>
  );
}