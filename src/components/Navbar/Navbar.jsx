import React from 'react'
import {AppBar, Toolbar, Typography, MenuIcon, IconButton, Menu, Badge} from '@material-ui/core'
import { AddShoppingCart} from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../asserts/logo.png'
import useStyles from './styles'
function Navbar({totalItems}) {
    const location = useLocation()
    const classes = useStyles()
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' varient='h6' className={classes.title} style={{color:'white'}}>
                        <img src={logo} className={classes.image} height='25px'></img>
                        Tej's Shop
                    </Typography>
                    <div className={classes.grow}>
                        <div className={classes.button}>
                        {location.pathname ==='/' && (<IconButton component={Link} to='/cart' aria-label="Shoping cart" color='inherit'>
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <AddShoppingCart style={{color:'white'}}></AddShoppingCart>
                                </Badge>
                            </IconButton>)}
                            
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
