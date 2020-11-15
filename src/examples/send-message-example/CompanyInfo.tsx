import React from "react";
import { useGlobalInputApp } from 'global-input-react';
import { Title, P, PageContainer } from './app-layout';


interface Props {
    back: () => void;
}
const CompanyInfo: React.FC<Props> = ({ back }) => {
    const mobile = useGlobalInputApp({
        initData: {
            action: "input",
            dataType: "form",
            form: {
                id: "###company_name###@iterative",
                title: "Our Contact Details",
                label: "contacts",
                fields: Object.values(FIELDS)
            }
        }
    });
    mobile.setOnchange(({ field }) => {
        switch (field.id) {
            case FIELDS.back.id:
                back();
        }
    });
    return (
        <PageContainer>
            <Title>Our Contact Details</Title>
            <mobile.ConnectQR />
            {mobile.isConnected && (<>

                <P>Our contact details are displayed on your mobile screen. You can save it into your mobile storage by pressing the "save" button</P>
            </>)}
        </PageContainer>
    );


};


const FIELDS = {
    companyName: {
        id: "company_name",
        type: "text",
        label: "Company Name",
        value: "Iterative Solution"
    },
    address: {
        id: "address",
        label: "Address",
        type: "text",
        nLines: 5,
        value: "Iterative Solution Limited \n Kemp House \n \n 152-160 \n City Road\n London EC1V 2NX"
    },
    phone: {
        id: "phone",
        label: "Phone",
        type: "text",
        value: "020 3290 6278"
    },
    email: {
        id: "email",
        label: "Email",
        type: "text",
        value: "info@iterativesolution.co.uk"
    },
    info: {
        id: "info",
        type: "info",
        value: ["You may save our contact info by pressing \"Save\" button. Note that the 'save' button will not be displayed if the identical information already exists in your mobile storage."],
    },
    back: {
        id: "back",
        type: "button",
        label: "back",
        icon: "back",
        viewId: "footer"
    }
};

export default CompanyInfo;