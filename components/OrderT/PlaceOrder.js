import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';
// import pricingmodule from 'pages/api/pricingmodule';

import { Link } from 'components';
import { userService, alertService } from 'services';

export { PlaceOrder };

function PlaceOrder(props) {
    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    const [sale, setSale] = useState({
        Gallons: 0,
        Total: 0,
        DeliveryDate: new Date(),
        UnitPrice: 1.05,
        State: ""
    });

    
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        Gallons: Yup.number()
            .required('Quantity is required') .min(50, 'Gallons cannot be less than 50'),
        State: Yup.string()
            .required('State is required'),
        DeliveryDate: Yup.date()
            .min(today)

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (!isAddMode) {
        formOptions.defaultValues = props.user;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        console.log(data);
        sale = setSale(data);
        makeSale(user.id, sale);
    }

    function makeSale(id, saleobj) {
        return userService.updatesales(id, saleobj)
            .then(() => {
                alertService.success('Sale made successfully', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    // function updateUser(id, data) {
    //     return userService.update(id, data)
    //         .then(() => {
    //             alertService.success('User updated', { keepAfterRouteChange: true });
    //             router.push('..');
    //         })
    //         .catch(alertService.error);
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                <div className="form-group col">
                    <label>Gallons</label>
                    <input name="Gallons" type="text"  {...register('Gallons')} className={`form-control ${errors.Gallons ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.Gallons?.message}</div>
                </div>
            </div>
            <div className="form-row">
                
            </div>
            <div className="form-row"> 
                <div className="form-group col">
                    <label>Unit Price</label>
                    <input name="UnitPrice" type="text" readOnly value={sale.UnitPrice} className={`form-control ${errors.UnitPrice ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.UnitPrice?.message}</div>
                </div>
            </div>
            <div className="form-row"> 
                <div className="form-group col">
                    <label>State</label>
                    <select name="State" type="text" {...register('State')} className={`form-control ${errors.State ? 'is-invalid' : ''}`} >
                    <option value = "AL" > AL </option> 
                     <option value = "AK" > AK </option> 
                     <option value = "AZ" > AZ </option> 
                     <option value = "AR" > AR </option> 
                     <option value = "CA" > CA </option> 
                     <option value = "CO" > CO </option> 
                     <option value = "CT" > CT </option> 
                     <option value = "DE" > DE </option> 
                     <option value = "DC" > DC </option> 
                     <option value = "FL" > FL </option> 
                     <option value = "GA" > GA </option> 
                     <option value = "HI" > HI </option> 
                     <option value = "ID" > ID </option> 
                     <option value = "IL" > IL </option> 
                     <option value = "IN" > IN </option> 
                     <option value = "IA" > IA </option> 
                     <option value = "KS" > KS </option> 
                     <option value = "KY" > KY </option> 
                     <option value = "LA" > LA </option> 
                     <option value = "ME" > ME </option> 
                     <option value = "MD" > MD </option> 
                     <option value = "MA" > MA </option> 
                     <option value = "MI" > MI </option> 
                     <option value = "MN" > MN </option> 
                     <option value = "MS" > MS </option> 
                     <option value = "MO" > MO </option> 
                     <option value = "MT" > MT </option> 
                     <option value = "NE" > NE </option> 
                     <option value = "NV" > NV </option> 
                     <option value = "NH" > NH </option> 
                     <option value = "NJ" > NJ </option> 
                     <option value = "NM" > NM </option> 
                     <option value = "NY" > NY </option> 
                     <option value = "NC" > NC </option> 
                     <option value = "ND" > ND </option> 
                     <option value = "OH" > OH </option> 
                     <option value = "OK" > OK </option> 
                     <option value = "OR" > OR </option> 
                     <option value = "PA" > PA </option> 
                     <option value = "RI" > RI </option> 
                     <option value = "SC" > SC </option> 
                     <option value = "SD" > SD </option> 
                     <option value = "TN" > TN </option> 
                     <option value = "TX" > TX </option> 
                     <option value = "UT" > UT </option> 
                     <option value = "VT" > VT </option> 
                     <option value = "VA" > VA </option> 
                     <option value = "WA" > WA </option> 
                     <option value = "WV" > WV </option> 
                     <option value = "WI" > WI </option> 
                     <option value = "WY" > WY </option> 
                    </select>
                     
                    <div className="invalid-feedback">{errors.State?.message}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label>Total</label>
                    {/* <> need to display the total </> */}
                    <div className="invalid-feedback">{errors.Total?.message}</div>
                </div>
                <div className="form-group col">
                    <label>Quote</label>
                    {/* <> need to display the Quote </> */}
                    <div className="invalid-feedback">{errors.Total?.message}</div>
                </div>
            </div>
            <div className="form-group">
                <button type="getQuote" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Get Quote
                </button>
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
                <Link href="/Order" className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}