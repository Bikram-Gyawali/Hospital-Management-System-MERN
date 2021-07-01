//en-IN, en-US

export const internationalNumberFormat = (number, format="en-US") => {
    return new Intl.NumberFormat(format).format(number)
}