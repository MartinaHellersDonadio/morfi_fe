import validator from 'validator';

const validateSignUp = (data) => {
    let errors = {};

        const {email, password, password2} = data;

        if(sessionStorage.users) {
            let IsUsers = sessionStorage.users;
            IsUsers = JSON.parse(IsUsers);
            let index = IsUsers.findIndex (user => user.email === email)
            if(index > -1) {
                errors.email = "Email already registred!";
            }
        }

        if (!validator.isEmail(email)) {
            errors.email = "Please enter a valid email address"
        }

        if (validator.isEmpty(email)) {
            errors.email = "Email field is required";
        }

        if (validator.isEmpty(password)) {
            errors.password = "Password field is required";
        }

        if (!validator.equals(password, password2)) {
            errors.password2 = "Password should match!"
        }

        if (validator.isEmpty(password2)) {
            errors.password2 = "Confirm Password field is required";
        }

        return {
            isInvalid: Object.keys(errors).length > 0,
            errors : errors,
        };
};

export default validateSignUp;
