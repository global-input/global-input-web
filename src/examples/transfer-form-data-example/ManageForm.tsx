import React, { useState } from 'react';
import { BasicLayout, FormContainer, CheckboxButton, FormFooter, TextButton } from './app-layout';
import { useMobile, FormField } from './mobile';
interface Props {
    formFields: FormField[];
    onFormStructureChanged: (formFields: FormField[]) => void;
    back: () => void;
    createField: () => void;


}


const ManagerForm: React.FC<Props> = ({ formFields, onFormStructureChanged, back, createField }) => {
    const [items, setItems] = useState(() => createSelectableItems(formFields));

    const initData = () => ({
        form: {
            title: "Form Manager",
            fields: [{ ...FIELDS.select, items }, FIELDS.back, FIELDS.delete, FIELDS.create]
        }
    });
    const mobile = useMobile(initData);

    const onDelete = () => {
        const newFormFields = deleteFormFields(formFields, items);
        if (newFormFields) {
            onFormStructureChanged(newFormFields);
            const items = createSelectableItems(newFormFields);
            setItems(items);
            const initData = {
                form: {
                    title: "Form Manager",
                    fields: [{ ...FIELDS.select, items }, FIELDS.back, FIELDS.delete, FIELDS.create]
                }
            }
            mobile.sendInitData(initData);
        }
    };
    mobile.setOnFieldChange((field) => {
        switch (field.id) {
            case FIELDS.select.id:
                const newItems = updateSelection(items, field.value as string[]);
                setItems(newItems);
                break;
            case FIELDS.back.id:
                back();
                break;
            case FIELDS.delete.id:
                onDelete();
                break;
            case FIELDS.create.id:
                createField();
                break;
            default:
        }
    });

    const toggleSelected = (itm: Item) => {
        const values: string[] = [];
        const newItems = items.map((f) => {
            if (f === itm) {
                f = { ...f, selected: !f.selected };
            }
            if (f.selected) {
                values.push(f.value);
            }
            return f;
        });
        setItems(newItems);
        mobile.sendValue(FIELDS.select.id, values);
    }

    return (
        <BasicLayout title="Form Manager">
            <FormContainer title="List Fields">
                {items.map(item => (
                    <CheckboxButton
                        label={item.label as string}
                        checked={item.selected} onChange={() => toggleSelected(item)}
                        key={item.value as string} />)
                )}
            </FormContainer>
            <FormFooter>
                <TextButton label="Back" onClick={back} />
                <TextButton label="Delete" onClick={onDelete} />
                <TextButton label="Create" onClick={createField} />
            </FormFooter>
        </BasicLayout>

    )
};


interface Item {
    label: string;
    value: string;
    selected: boolean;
}

const FIELDS = {
    select: {
        id: "fieldsToDelete",
        label: "Select",
        type: "list",
        selectType: "multiple",
        value: null,
        items: []
    },
    back: {
        id: "Back",
        label: "Back",
        type: "button",
        viewId: "row1"
    },
    delete: {
        id: "deleteSelected",
        label: "Delete Selected",
        type: "button",
        viewId: "row1"
    },
    create: {
        id: "createNewField",
        label: "Create",
        type: "button",
        viewId: "row1"
    }

};





const createSelectableItems = (formFields: FormField[]): Item[] => {
    return formFields.map(f => {
        return { label: f.label as string, value: f.id as string, selected: false };
    });

};
const updateSelection = (items: Item[], values: string[]) => {
    const newItems = items.map(itm => {
        if (values && values.length > 0) {
            for (let value of values) {
                if (itm.value === value) {
                    return { ...itm, selected: true };
                }
            }
        }
        return { ...itm, selected: false };
    });
    return newItems;
};

const deleteFormFields = (formFields: FormField[], items: Item[]) => {
    let modified = false;

    const newFormFields = formFields.filter((field) => {
        for (const itm of items) {
            if (itm.value === field.id && itm.selected) {
                modified = true;
                return false;
            }
        }
        return true;
    });
    return modified ? newFormFields : null;
};

export default ManagerForm;