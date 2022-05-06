import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { userService, alertService } from 'services';

export { AddEdit };

function AddEdit(props) {
    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        fullname: Yup.string()
            .required('Full name is required')
            .max(50, 'Full Name must be a maximum of 50 characters'),
        username: Yup.string()
            .required('Username is required'),
        Address1: Yup.string()
            .required('Address1 is required')
            .max(100, 'Address 1 must be a maximum of 50 characters'),
        Address2: Yup.string()
            .max(100, 'Address 2 must be a maximum of 50 characters'),
        City: Yup.string()
            .required('City is required')
            .max(100, 'City must be a maximum of 50 characters'),
        State: Yup.string()
            .required('State is required'),
        Zip: Yup.string()
            .required('Zip is required')
            .min(5, 'Zipcode mus be at least 5 characters')
            .max(9, 'Zipcode must be a maximum of 50 characters'),
        password: Yup.string()
            .transform(x => x === '' ? undefined : x)
            .concat(isAddMode ? Yup.string().required('Password is required') : null)
            .min(6, 'Password must be at least 6 characters')
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
        return isAddMode
            ? createUser(data)
            : updateUser(user.id, data);
    }

    function createUser(data) {
        return userService.register(data)
            .then(() => {
                alertService.success('User added', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                <div className="form-group col">
                    <label>Full Name</label>
                    <input name="fullname" type="text" {...register('fullname')} className={`form-control ${errors.fullname ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.fullname?.message}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label>Username</label>
                    <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.username?.message}</div>
                </div>
                <div className="form-group col">
                    <label>
                        Password
                        {!isAddMode && <em className="ml-1">(Leave blank to keep the same password)</em>}
                    </label>
                    <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
            </div>
            <div className="form-row"> 
                <div className="form-group col">
                    <label>Address1</label>
                    <input name="Address1" type="text" {...register('Address1')} className={`form-control ${errors.Address1 ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.Address1?.message}</div>
                </div>
                <div className="form-group col">
                    <label>Address2</label>
                    <input name="Address2" type="text" {...register('Address2')} className={`form-control ${errors.Address2 ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.Address2?.message}</div>
                </div>
            </div>
            <div className="form-row"> 
                <div className="form-group col">
                    <label>City</label>
                    <input name="City" type="text" {...register('City')} className={`form-control ${errors.City ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.City?.message}</div>
                </div>
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
                <div className="form-group col">
                    <label>Zipcode</label>
                    <input name="Zip" type="text" {...register('Zip')} className={`form-control ${errors.Zip ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.Zip?.message}</div>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
                <Link href="/users" className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}