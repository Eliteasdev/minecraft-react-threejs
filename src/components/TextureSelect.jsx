import { useStore } from '../hooks/useStore'
import * as images from '../images/images'
import { useKeyboard } from '../hooks/useKeyboard'
import { useEffect, useState } from 'react'

export function TextureSelect () {
  const [visible, setVisible] = useState(false)
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

  const {
    dirt,
    grass,
    glass,
    wood,
    log
  } = useKeyboard()

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 500)
    setVisible(true)

    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [texture])

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log
    }

    const selectedTexture = Object
      .entries(options)
      .find(([texture, isEnabled]) => isEnabled)
    if (selectedTexture) {
      const [textureName] = selectedTexture
      setTexture(textureName)
    }

    console.log(selectedTexture)
  }, [dirt, grass, glass, wood, log])
  return (
    <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {
        Object
          .entries(images)
          .map(([imgKey, img]) => {
            return (
            <img
            className={texture === imgKey.replace('Image', '') ? 'selected' : ''}
            key={imgKey}
            src={img}
            alt={imgKey}
            />
            )
          })
      }
    </div>
  )
}
