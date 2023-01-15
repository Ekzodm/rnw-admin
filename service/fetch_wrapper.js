import { useAuthStore } from "~/store/auth"

export function auth_request(url, opts){
  const { token } = useAuthStore()
  return useFetch(`https://myrocknwall.com/api/administration${url}`, {
    ...(opts ? opts : {}),
    headers: {
      Authorization:`Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}