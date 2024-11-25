const rules = {
    username: [
        {required: true, message: 'Please enter a name'}
    ],
    email: [
        {required: true, message: `Can't continue without an email`},
        {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Please provide a valid email!'
        }
    ],
    password: [
        {required: true, message: 'Enter the password'},
        {minLength: 8, message: 'Password must have atleast 8 characters'}

    ]
}

export function formValidation(formData, setError){
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
        console.log(key, value);
        
        rules[key]?.some((rule) => {
            if(rule.required && !value){
                errorsData[key] = rule.message;
                return true
            }

            if(rule.minLength && value.length < rule.minLength){
                errorsData[key] = rule.message
                return true
            }

            if(rule.pattern && !rule.pattern.test(value)){
                errorsData[key] = rule.message
                return true
            }
        })
    })
    setError(errorsData)
    return errorsData;
}