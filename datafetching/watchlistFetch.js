import useSWR from 'swr'

const pre = "http://10.0.2.2:4000/"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function watchlistFetch (focused) {
  let  url = pre+'services/myWatchlist';
   
    const { data, error,isValidating } = useSWR(focused ? url : null, fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval:10000
    })

 

    return {
      user: data,
      isLoading: isValidating,
      isError: error
    }
  }
  