import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PetsIcon from '@mui/icons-material/Pets';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 500, margin: '0px auto' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        <BottomNavigationAction label="Pets" icon={<PetsIcon />} onClick={() => navigate("/")}/>
          {/* <Link to='/' />
        </BottomNavigationAction> */}

        <BottomNavigationAction label="Add Pet" icon={<AddCircleOutlineIcon />} onClick={() => navigate("/addpet")}/>
          {/* <Link to='/addpet' />
        </BottomNavigationAction> */}
      </BottomNavigation>
    </Box>
  );
}

// import React from 'react';

// // core components
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// // icons
// import PetsIcon from '@mui/icons-material/Pets';

// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// import { Link } from 'react-router-dom';

// const BottomNav = () => {

//   const [value, setValue] = React.useState(0);


//   return (
//     // <BottomNavigation>
//     //   showLabels
//     //   value={value}
//     //   onChange={(event, newValue) => {
//     //     setValue(newValue);
//     //   }}
//     //   <Link to='/'>
//     //     <BottomNavigationAction
//     //       label="Pets"
//     //       icon={<PetsIcon />}
//     //     />
//     //   </Link>

//     //   <Link to='/addpet'>
//     //     <BottomNavigationAction
//     //       label="Add Pet"
//     //       icon={<AddCircleOutlineIcon />}
//     //     />
//     //   </Link>
//     // </BottomNavigation>
//   );
// }

// export default BottomNav