import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

import {
  grassImage,
  dirtImage,
  logImage,
  glassImage,
  woodImage
} from './images'

const groundTexture = new TextureLoader().load(grassImage)
const dirtTexture = new TextureLoader().load(dirtImage)
const logTexture = new TextureLoader().load(logImage)
const glassTexture = new TextureLoader().load(glassImage)
const woodTexture = new TextureLoader().load(woodImage)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter

export {
  groundTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
}
