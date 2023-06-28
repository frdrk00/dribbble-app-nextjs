'use client'

import { getProviders, signIn } from 'next-auth/react'
import { FC, useState, useEffect } from 'react'

interface AuthProvidersProps {}

type Provider = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
  signinUrlParams?: Record<string, string> | null
}

type Providers = Record<string, Provider>

const AuthProviders: FC<AuthProvidersProps> = ({}) => {
  const [providers, setProviders] = useState<Providers | null>(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()

      setProviders(res)
    }

    fetchProviders()
  }, [])

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i} onClick={() => signIn(provider?.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    )
  }
}

export default AuthProviders
