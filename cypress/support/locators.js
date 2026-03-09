const locators = {
    MENU: {
        FORMS: "div.category-cards > a:nth-child(2) > div > div > div:nth-child(3) > h5",
    },

    MENU_FORMS: {
        ROUTER_LINK: "li.btn.btn-light.active"
    },

    FORMS: {
        TITLE: "h1.text-center",
        SUBTITLE: "div.practice-form-wrapper > h5",
        FIRST_NAME: "#firstName",
        LAST_NAME: "#lastName",
        EMAIL: "#userEmail",
        GENDER: "#genterWrapper",
        MOBILE: "#userNumber",
        DATE_OF_BIRTH: "#dateOfBirthInput",
        SUBJECTS: "#subjectsInput",
        HOBBIES: "#hobbiesWrapper",
        PICTURE: "#uploadPicture",
        CURRENT_ADDRESS: "#currentAddress",
        STATE: "#state",
        CITY: "#city",
        SUBMIT: "#submit"
    }
}

export default locators;