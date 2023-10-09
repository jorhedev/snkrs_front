import { MAX_YEAR_REGISTER, MIN_YEAR_REGISTER } from "../../const";

const validateNIT = (nit) => {
    let NIT = nit
    if (typeof (nit) == "number") {
        NIT = nit.toString();
    }

    if (NIT.trim() == "" || NIT.trim() == null || NIT.trim() == undefined) {
        return 'The NIT number is required.'
    }
    else {
        if (!NIT.trim().match(/^\d+$/)) {
            return "Remove non-Numeric characters.";
        }

        if (/[\s]{1,}/.test(NIT) == true) {
            return `Delete spaces.`
        }

        if (/\d/.test(NIT.trim()) == true && (8 > NIT.trim().length || NIT.trim().length > 12)) {
            return "Write 8 to 20 numerical digits."
        }
    }
    return ''
}

const validateBirthday = (date) => {

    var dateSplit = date.split('-');
    var year = parseInt(dateSplit[0], 10);
    var month = parseInt(dateSplit[1], 10);
    var day = parseInt(dateSplit[2], 10);

    if (date.trim() == "" || date.trim() == null || date.trim() == undefined) {
        return 'The birthday is required.'
    }
    else {
        const intDate = new Date(date);
        const minDate = new Date(MIN_YEAR_REGISTER);
        const maxDate = new Date(MAX_YEAR_REGISTER);

        if (day < 1 || day > 31 || month < 1 || month > 12) {
            return 'The date is invalid.'
        }

        if (intDate > maxDate) {
            return "You must be of legal age to register."
        }

        if (intDate < minDate) {
            return "You exceed the maximum age allowed to register."
        }

    }
    return ''

}
const validateName = (name, Type = 'name') => {
    if (name == "" || name == null || name == undefined) {
        return `The ${Type} is required.`
    }
    else {
        if (/[\s]{2,}/.test(name) == true) {
            return `Delete multi-spaces between names.`
        }

        if (/\d/.test(name) == true) {
            return `The ${Type} mustn't contain numbers.`
        }

        if (Math.max(...name.split(' ').map(p => p.length)) > 15) {
            return `Delete words longer than 15 characters.`
        }

        if (Math.min(...name.split(' ').map(p => p.length)) < 3) {
            return `Remove words of less than 3 characters`
        }

        if (/[!-/:-@[-`{-~¿¡°]/.test(name) == true) {
            return `Remove special characters from the ${Type}.`
        }
    }
    return ''
}

const validateEmail = (email) => {
    // This field is required.
    if (email == "" || email == null || email == undefined) {
        return 'The email is required.'
    }
    else {
        if (email.match(/@/)?.length != 1) { return "Add only one @ symbol." }

        if (/([!-,/:-@[-^`{-~¿¡°])(?=@)/.test(email) == true) { return "Username email only supports '._-' characters." }

        if (/\s+/.test(email) == true) { return "Remove spaces." }

        if (/[A-ZÑ]/.test(email) == true) {
            return "Remove capital letters."
        }

        if (/^([!-/:-@[-`{-~¿¡°])/.test(email) == true) {
            return "Remove special characters at start."
        }

        if (/([ -/:-@[-`{-~¿¡°])(?=@)/.test(email) == true) {
            return "Remove special characters at end."
        }

        if (/[_.-]{2,}/.test(email) == true) {
            return "Remove consecutive special characters."
        }

        if (/(?<=@)(([\w-]+\.)+[\w-]{2,4})$/.test(email) == false) {
            return "Domain invalid."
        }

        if (/[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/.test(email) == true) {
            return "Remove acent characters.";
        }
    }

}

const validatePassword = (password) => {
    // This field is required.
    if (password == "" || password == null || password == undefined) {
        return "The password is required."
    }
    else {
        if (/\s+/.test(password) == true) {
            return "Remove spaces.";
        }

        if (8 > password.length || password.length > 20) {
            return "Write 8 to 20 characters.";
        }

        if (/[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/.test(password) == true) {
            return "Remove acent characters.";
        }

        if (/[A-ZÑ]/.test(password) == false) {
            return "Add at least 1 capital letter."
        }

        if (/[a-zñ]/.test(password) == false) {
            return "Add at least 1 lowercase letter."
        }

        if (/\d/.test(password) == false) {
            return "Add at least 1 number."
        }

        if (/[!-/:-@[-`{-~¿¡°]/.test(password) == false) {
            return "Add at least 1 special character."
        }
    }
}



const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword == ""
        || confirmPassword == null
        || confirmPassword == undefined) {
        return "Retype your confirmPassword."
    }
    else if (confirmPassword != confirmPassword) {
        return "Password did not match"
    } else {
        return ''
    }
}

const signUpValidate = (state) => {
    let signUpErrors = {
        nit: validateNIT(state.nit) || '',
        birthday: validateBirthday(state.birthday) || '',
        firstName: validateName(state.firstName, 'firstname') || '',
        lastName: validateName(state.lastName, 'lastname') || '',
        email: validateEmail(state.email) || '',
        password: validatePassword(state.password) || '',
    }
    return signUpErrors
}

export default signUpValidate