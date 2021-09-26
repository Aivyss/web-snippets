# Web-snippets

## account module

### cValid

-   feature: check string validation
-   parameters
    -   str: target string
    -   min: minimum string
    -   max: maximum string
    -   ....options: 'special', 'capital', 'number', 'no_special', 'no-capital', 'no_number'
        (you can choose multiple options)
-   return: {isValid, errMessage}

### confirmPw

-   feature: confirm password
-   parameters
    -   pw : password
    -   pwCf: password again
-   return: {isValid, errMessage}

### fullEmailValid

-   feature: check email validation
-   parameters
    -   email: email
-   return: boolean

### rightSideEmailValid

-   feature: check email validation (right side)
-   parameters
    -   domain: email domain
-   return: boolean

### cValidDashPhoneNum

-   feature: check Phone number (000-xxxx-0000)
-   parameters
    -   str: dashed phone number
-   return: boolean

### cValidPhoneNum

-   feature: check Phone number
-   parameters
    -   str: just number phone number
    -   count : length of phone number
-   return: boolean

## strings module

### getHashTags

-   feature: get hash tag array from target string
-   parameters
    -   str: target string
-   return array of hash tags

### getDashPhoneNum

-   feature: get dashed phone numbers array
-   parameters
    -   str: target string
-   return: array of phone numbers

### getPhoneNum

-   feature: get phone numbers array
-   parameters
    -   str: target string
-   return: array of phone numbers

### parseCookieString

-   feature: cookie string → JSON structure
-   parameters
    -   cookie: cookie string
-   return: cookie JSON

## file module

### imageValid

-   feature: check image extension validation & filesize
-   parameters
    -   file: target file (JPEG, JPG, JFIF, PNG, GIF)
    -   limitSize?: file size string ('1 byte', '1 kb', '1 mb', '1 gb', '1 tb')
-   return: {isValid, errMessage}

### rescaleSize

-   feature: recalculation based on target unit
-   parameters
    -   size: file size string ('1 byte', '1 kb', '1 mb', '1 gb', '1 tb')
    -   rescaleUnit: ('byte', 'kb', 'mb', 'gb', 'tb')
-   return: string (recalculated file size)

## array module

### shuffle

-   feature: shuffle array (random shuffle)
-   parameters
    -   array: target array
-   return: shuffled array

### repeatPop

-   feature: n-times popping
-   parameters
    -   array: target array
    -   times: n-times
-   return: poppedArray

### getPropVals

-   feature: get props-value of objects in array
-   parameters
    -   array: target array
    -   propsName: string name
-   return: array of values from property name

## numbers module

### getRandInt

-   feature: get random int (start ~ end)
-   parameters
    -   start: start integer
    -   end: end integer
-   return: random integer

### getRandDouble

-   feature: get random double (start ~ end)
-   parameters
    -   start: start double
    -   end: end double
-   return: random double
