export const select = {
    templateOf: {
        menuProduct: '#template-menu-product',
        cartProduct: '#template-cart-product', // CODE ADDED
        bookingWidget: '#template-booking-widget',
        homePage: '#template-home-page',
};
export const classNames = {
    menuProduct: {
        wrapperActive: 'active',
        imageVisible: 'active',
};
export const settings =  {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
        products: 'products',
        orders: 'orders',
        product: 'product',
        order: 'order',
        booking: 'bookings',
        event: 'events',
        dateStartParamKey: 'date_gte',
        dateEndParamKey: 'date_lte',
        notRepeatParam: 'repeat=false',
        repeatParam: 'repeat_ne=false',
};
export const template = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
    cartProduct: Handlebars.compile(document.querySelector(select.templateOf.cartProduct).innerHTML), 
};
