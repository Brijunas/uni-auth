import { useState, useEffect, useDeferredValue } from 'react'
import { zxcvbnOptions, zxcvbnAsync, ZxcvbnResult } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'

const options = {
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
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
