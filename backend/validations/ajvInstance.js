import AJV from 'ajv'
import addFormat from 'ajv-formats'
const ajv = new AJV({allErrors:true})

addFormat(ajv)

export default ajv