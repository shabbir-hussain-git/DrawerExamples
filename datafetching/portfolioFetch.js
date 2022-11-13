import useSWR from 'swr'

const pre = "http://10.0.2.2:4000/"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function portfolioFetch (url,focused) {
    url = pre+url;
    // console.log('-----------Start-----------')
    // console.log('focused ',focused,' ');
    const { data, error,isValidating } = useSWR(focused ? url : null, fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval:100000
    })

    // console.log(isValidating)
    // console.log('-----------End-----------')

    return {
      user: data,
      isLoading: isValidating,
      isError: error
    }
  }
  