import { useEffect, useState } from 'react'

function useIndexRow({duration, size}, initialState = 0) {
  const [currentIndex, setCurrentIndex] = useState(initialState)

  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % size)
    }, duration)
    return () => clearTimeout(timeout)
  }, [currentIndex, duration, size])

  return currentIndex
}

export default useIndexRow
