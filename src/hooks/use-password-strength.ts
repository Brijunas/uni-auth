import { useState, useEffect, useDeferredValue } from 'react'
import { zxcvbnOptions, zxcvbnAsync, ZxcvbnResult } from '@zxcvbn-ts/core'
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import zxcvbnEnPackage from '@zxcvbn-ts/language-en'

const options = {
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  useLevenshteinDistance: true,
  translations: zxcvbnEnPackage.translations,
}
zxcvbnOptions.setOptions(options)

const usePasswordStrength = (password: string): ZxcvbnResult | null => {
  const [result, setResult] = useState<ZxcvbnResult | null>(null)
  const deferredPassword = useDeferredValue(password)

  useEffect(() => {
    if (!deferredPassword) return

    zxcvbnAsync(deferredPassword).then((response) => setResult(response))
  }, [deferredPassword])

  return result
}

export default usePasswordStrength
