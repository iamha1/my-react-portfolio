import React from 'react';
import { withStyles, } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { React as ReactIcon, Cellphone, LanguageJavascript } from 'mdi-material-ui';
import { Paper, Typography } from '@material-ui/core';

import { updateFilter } from '../actions/filters';

const styles = {
    container: {
        justifyContent: "center"
    },
    heading: {
        display: "flex",
        justifyContent: "center",
        padding: 10
    },
    paperStyle: {
        margin: 10
    },

};
