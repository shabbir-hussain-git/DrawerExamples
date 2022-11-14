import useSWR from 'swr'

const pre = "http://10.0.2.2:4000/"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function portfolioFetch (url,focused) {
    url = pre+url;
   
    const { data, error,isValidating } = useSWR(focused ? url : null, fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval:100000
    })

 

    return {
      user: data,
      isLoading: isValidating,
      isError: error
    }
  }
  