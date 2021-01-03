export const home = {
    id: 'back-to-website-home',
    type: 'button',
    label: 'Back to Home',
    viewId: "row10",
    icon:'home',
    style:{
        backgroundColor:'rgb(220,220,220)'
    }
};

export const add = (inputFields: any) => {
    inputFields.backToHome = home;
}

export const onFieldChange = (field, history) => {
    switch (field.id) {
        case home.id:
            history.push('/');
            break;
        default:
            return false;
    }
    return true;
};
