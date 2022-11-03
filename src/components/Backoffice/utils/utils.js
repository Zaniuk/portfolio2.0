const createInitialValues = (fields, data) => {
    if(data){
        const names = new Map(fields.map(field => [field.name, data[field.name]]))
        const initialValues = Object.fromEntries(names)
        return initialValues
    }
        const names = new Map(fields.map(field => [field.name, '']))
        const initialValues = Object.fromEntries(names)
        return initialValues
}
export default createInitialValues