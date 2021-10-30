import CardComponent from "./CardComponent";
import classes from './AppContentForm.module.css';
import {Grid, TextField} from "@material-ui/core";

// Oferta Car Rental
//  - id
//  - marka samochodu
//  - model samochodu
//  - stopień ekonomii (1-10) (10=ekonomiczny)
//  - typ samochodu (SUV, CABRIO, SEDAN)
//  - cena
const AppContentForm = () => {
    return (
        <div>
            <CardComponent title={'Car Rental Offer Form'}>
                <Grid container className={classes.FormContainer}>
                    <Grid item xs={12}>
                        <TextField className={classes.FormStretchField}
                                   label={'Car Make'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className={classes.FormStretchField}
                                   label={'Car Model'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className={classes.FormStretchField}
                                   type="number"
                                   inputProps={{
                                       'min': 1,
                                       'max': 10,
                                       'step': 0.1,
                                   }}
                                   label={'Economy Level'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className={classes.FormStretchField}
                                   type="number"
                                   inputProps={{
                                       'min': 0.01,
                                       'step': 0.01,
                                   }}
                                   label={'Price [per hour]'} size={'small'} variant="filled"/>
                    </Grid>
                </Grid>
            </CardComponent>
        </div>
    )
}

export default AppContentForm;