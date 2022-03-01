import { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'

export default function useAuth(settrOnly) {
    const {token, setToken} = useContext(AuthContext)

    return settrOnly ? [token, setToken] : [setToken]
}