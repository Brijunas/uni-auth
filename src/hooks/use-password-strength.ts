import { useState, useEffect, useDeferredValue } from 'react'
import { zxcvbnOptions, zxcvbnAsync, ZxcvbnResult } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en'

const options = {
  translations: zxcvbnEnPackage.translations,
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
}
zxcvbnOptions.setOptions(options)

const usePasswordStrength = (password: string): ZxcvbnResult | null => {
  const [result, setResult] = useState<ZxcvbnResult | null>(null)
  const deferredPassword = useDeferredValue(password)

  useEffect(() => {
    if (!deferredPassword) return

    zxcvbnAsync(deferredPassword)
      .then((response) => setResult(response))
      .catch((error) => console.error(error))
  }, [deferredPassword])

  return result
}

export default usePasswordStrength
