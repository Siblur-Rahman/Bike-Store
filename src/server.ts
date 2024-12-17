import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`sever is running on ${config.port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

server()