import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root:{
        maxWidth:'100%',
        borderRadius:'10px'
    },
    media:{
        height:1,
        paddingTop:'56.25%'
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between',
    },

}))