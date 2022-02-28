import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim().required("name must be at least 2 characters"),
    phone: yup.string().required('Must be a valid phone number'),
    size: yup.string().oneOf(['small', 'medium', 'large'], 'Size is required').required(),
    sauce: yup.string().oneOf(['red', 'white', 'mayo', 'none'], 'Sauce option is required').required(),
    special: yup.string().trim(),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    cheese: yup.boolean(),
    peanuts: yup.boolean()
})

export default formSchema;