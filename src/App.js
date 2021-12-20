import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      backgroundColor: theme.palette.primary.main 
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main, 
      borderRadius: "23px",
      outline: '1px solid slategrey'
    }
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: theme.spacing(1)
    }
  },
  tabs: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingBottom: theme.spacing(1)
    }
  },
  cardContainer: {
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(25)
    }
  },
  userCard: {
    maxWidth: "70vw", 
    margin: "auto", 
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr "
    }
  },
  cardMedia: {
    maxWidth: "30vw",
    minHeight: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "50vw",
      margin: "auto"
    }
  },
  cardContent: {
    maxHeight: "60vh",
    overflow: "auto",
    [theme.breakpoints.down("md")]: {
      marginTop: "2em"
    }
  },
  cardTypo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  fd_column: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  shareBtn: {
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "-2em !important",
    backgroundColor: "white !important"
  }
}));

function App() {
  const classes = useStyles();


  return (
    <>
      <Header classes={classes} />
      <Home classes={classes} />
    </>
  );
}

export default App;
