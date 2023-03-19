import React, { useEffect, useState } from 'react';

// mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from '@mui/material';

// mui icons
import { IconButton, ListItem } from '@mui/material';
import {
    DeleteOutline,
    Edit,
    ExpandMore,
    ExpandLess,
    LabelImportantOutlined,
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import { useDeletePetMutation } from '../services/petApi';
import { usePetContext } from '../petContext';

// import { useGetPetsQuery } from '../services/petApi';
// import Loader from './Loader';
// import { useParams } from 'react-router-dom';


const PetListItem = ({petType, id, petFieldData}) => {

    // const { data, isFetching } = useGetPetsQuery();
    // const [pets, setPets] = useState();
    const { getPetId } = usePetContext();
    const [deletePet, { isLoading }] = useDeletePetMutation();
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(!open);
      };

    const handleEditButton = () => {
        getPetId(id);
        navigate(`/editpet/${id}`);
    };

    console.log(id);
    // const { name, breed, location, age, sex } = pet.attributes;

    // console.log(data);

    // if (isFetching) return <Loader />;

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
            <ListItem
                secondaryAction={
                    <>
                        <IconButton onClick={handleEditButton} edge="end" aria-label="edit">
                            <Edit sx={{ color: 'green' }} />
                        </IconButton>
                        <IconButton onClick={()=>deletePet(id)} edge="end" aria-label="delete" sx={{ padding: 2 }}>
                            <DeleteOutline color="secondary" />
                        </IconButton>
                    </>
                }
            >
                <ListItemButton disableRipple onClick={handleClick}>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        secondary="Name, Breed, Location, Age, Sex"
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        petFieldData.map((item, i) => (
                            <ListItemButton key={i} sx={{ pl: 9 }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.attrib} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </List>
    )
}

export default PetListItem