import { Form, FormField } from "../../components/Form/Form"
import { Button } from "../../components/Button/Button"

export const InsumosCreate = () => {
    const fieldsFormRoles: FormField[] = [
        {
            name: 'Nombre del Insumo',
            type: 'text',
            label: 'Nombre del Insumo',
        },
        {
            name: 'Valor Unitario del Insumo',
            type: 'text',
            label: 'Valor Unitario del Insumo',
        },
        {
            name: 'Cantidad del Insumo',
            type: 'text',
            label: 'Cantidad del Insumo',
        },
        {
            name: 'Categoría del Insumo',
            type: 'text',
            label: 'Categoría del Insumo',
        },
        {
            name: 'Descripción del Insumo',
            type: 'text',
            label: 'Descripción del Insumo',
        },
        
        
        
    ]
    return (
        <Form title="Crear Insumo" fields={fieldsFormRoles} onSubmit={e=>e.preventDefault()} button={<Button text={"Crear Insumo"} onClick={()=>null}/>}/>
    )
}