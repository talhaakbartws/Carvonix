export const emailValidation = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(email) === false) {
    return {
      valid: false,
      errors: reg.test(email) === false ? 'Email format is invalid' : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};
export const passwordValidation = password => {
  let minNumAlp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password === '') {
    return {
      valid: false,
      errors: password === '' ? 'Please Enter Your Password' : null,
    };
  } else if (minNumAlp.test(password) === false) {
    return {
      valid: false,
      errors:
        minNumAlp.test(password) === false
          ? 'Minimum 8 alphaNumaric and one capital and one special char'
          : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};
export const loginValidation = (email, password) => {
  if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (password === '') {
    return {
      valid: false,
      errors: password === '' ? 'Please Enter Your Password' : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};
export const userNameValid = name => {
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Please Enter Your Name' : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};
export const pnoneNumberValid = (phone, country) => {
  let regex =
    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
  if (country === 'Select Country') {
    return {
      valid: false,
      errors: country == 'Select Country' ? 'Select Country' : null,
    };
  } else if (phone === '') {
    return {
      valid: false,
      errors: phone === '' ? 'Please Enter Phone Number' : null,
    };
  } else if (phone.length < 7) {
    return {
      valid: false,
      errors: phone.length < 7 ? 'smallest phone number length' : null,
    };
  } else if (regex.test(phone) === false) {
    return {
      valid: false,
      errors: regex.test(phone) === false ? 'Invalid Input' : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};
export const SignUpNameValid = (name, links) => {
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Enter Name' : null,
    };
  } else if (links === '') {
    return {
      valid: false,
      errors: links === '' ? 'Enter Link' : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};
export const BioValid = bio => {
  if (bio === '') {
    return {
      valid: false,
      errors: bio === '' ? 'Please Enter Detail' : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};
export const GenderValid = gender => {
  if (gender === '') {
    return {
      valid: false,
      errors: gender === '' ? 'Please Enter Gender' : null,
    };
  } else {
    return {valid: true, errors: null};
  }
};
