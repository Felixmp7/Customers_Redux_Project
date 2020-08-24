import React, { useState } from 'react'
import './ContactList.css'
import Client from '../components/Client';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types'
import Icon from "@mdi/react";
import { mdiViewGrid, mdiViewList } from "@mdi/js";

const useStyles = makeStyles((theme) => ({
  headerPaper: {
    borderRadius: 0,
    height: 50,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 35,
    marginBottom: 5
  },
}));

const ContactList = ({ contactsData }) => {
  const [view, setView] = useState('list');

  const handleView = (param) => setView(param)

  const classes = useStyles();

  // const colors = ['#3f51b5','#aaa'];
  const listIcon = view === "list" ? "#799ED0" : "#aaa";
  const gridIcon = view === "grid" ? "#799ED0" : "#aaa";

  return (
    <div className="contactListContainer">
      <Paper className={classes.headerPaper}>
        <Button onClick={() => handleView("list")}>
          <Icon path={mdiViewList} size={1} color={listIcon} />
        </Button>
        <Button onClick={() => handleView("grid")}>
          <Icon path={mdiViewGrid} size={1} color={gridIcon} />
        </Button>
      </Paper>
      <div className="listContainer">
        {contactsData.map((client, index) => {
          return (
            <Client
              key={index}
              dni={client.dni}
              urlPath={"client"}
              clientName={client.name}
            />
          );
        })}
      </div>
    </div>
  );
};

ContactList.propTypes = {
  contactsData: PropTypes.array,
};

export default ContactList
