export const home = {
    id: 'back-to-website-home',
    type: 'button',
    label: 'Home',
    icon: 'home',
    viewId: "row9"
};

export const add = (inputFields: any) => {
    inputFields.backToHome = home;
}
export const getFields = () => [home];

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
