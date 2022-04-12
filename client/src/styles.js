import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme)=> ({ //! theme from materialUi docs
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')] : { //! materialUi offers this breakpoint like a mediaquery sm means small devices

        mainContainer: {
          flexDirection: "column-reverse"
        },
      }
}))