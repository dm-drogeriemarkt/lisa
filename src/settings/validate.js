import Ajv from 'ajv'

class SettingsError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'SettingsError';
  }
}

import schema from './settings.schema'

const validate = (data) => {
  try {
    const ajv = new Ajv()
    const valid = ajv.validate(schema, data)

    if(!valid) {
      const [{ dataPath, message }] = ajv.errors
      throw new SettingsError(`${dataPath} ${message}`)
    }
  } catch(e) {
    console.error(e)
  }
}

export default validate
