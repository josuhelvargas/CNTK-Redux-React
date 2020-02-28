//Redux & React
import * as React from 'react';
import { PureComponent } from 'react';
import * as MyFormStore from '../store/MyForm';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ApplicationState } from '../store';

//const useStyles = makeStyles({
//    root: {
//        minWidth: 275,
//    },
//    bullet: {
//        display: 'inline-block',
//        margin: '0 2px',
//        transform: 'scale(0.8)',
//    },
//    title: {
//        fontSize: 14,
//    },
//    pos: {
//        marginBottom: 12,
//    },
//});


//const classes = useStyles();
//const bull = <span className={classes.bullet}>•</span>;

type MyFormProps =
    MyFormStore.MyFormState &
    typeof MyFormStore.actionCreatorsMyForm &
    RouteComponentProps<[]>;


class MyForm extends PureComponent<MyFormProps>
{
    public render() {

        return (
            <React.Fragment>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>FormRedux</Typography>
                    <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" value={this.props.name} onChange={event => this.props.onChangeForm()} />
                            <TextField id="outlined-basic" label="Apellido" variant="outlined" value={this.props.firstName} onChange={event => this.props.onChangeForm()} />
                            <TextField id="outlined-basic" label="Edad" variant="outlined" value={this.props.age} onChange={event => this.props.onChangeForm()} />
                    </form>

                </CardContent>
                <CardActions>
                    <Button size="small">Enviar Datos</Button>
                </CardActions>
             </Card>
             </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) =>
    {state.name, state.firstName, state.age }, MyFormStore.actionCreatorsMyForm)(MyForm);

