import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

const styles = {
	root: {
		flexGrow: 1,
		marginBottom: "40px"
	},
	flex: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	link: {
		textDecoration: "none",
		color: "#fff"
	}
};

class Header extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Link to="/" className={[classes.flex, classes.link].join(" ")}>
						<Typography variant="title" color="inherit" className={classes.flex}>
								Dictionary - remember everything!
						</Typography>
						</Link>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Header);
