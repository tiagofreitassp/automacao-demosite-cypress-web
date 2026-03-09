const locators = {
    MENU: {
        FORMS: "div.category-cards > a:nth-child(2) > div > div > div:nth-child(3) > h5",
        ELEMENTS: "//h5[normalize-space(text())='Elements']",
        ALERTS_FRAME_WINDOWS: "//h5[normalize-space(text())='Alerts, Frame & Windows']",
        WIDGETS: "//h5[normalize-space(text())='Widgets']",
        INTERACTIONS: "//h5[normalize-space(text())='Interactions']",
        BOOK_STORE: "//h5[normalize-space(text())='Book Store Application']"
    },

    MENU_FORMS: {
        ROUTER_LINK: "//span[text()='Practice Form']"
    }
}

export default locators;