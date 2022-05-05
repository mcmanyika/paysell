import React from 'react'
import { useMoralis } from "react-moralis";

export default function Signin() {
    const { authenticate, authError, isAuthenticating, Moralis} = useMoralis()
    const handleCustomLogin = async () => {
        authenticate({
            provider: "web3Auth",
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            chainId: Moralis.Chains.BSC_TESTNET,
            theme: "light"
        })
    }
  return (
    <div className='w-96 m-auto rounded bg-cyan-100'>
        {isAuthenticating && <p>Authenticating</p>}
        {authError && (
            <p>{JSON.stringify(authError.message)}</p>
        )}
        <div>
            <button className='p-2' onClick={handleCustomLogin}>Login</button>
        </div>
    </div>
  )
}
