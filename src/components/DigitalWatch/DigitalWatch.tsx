import { useState } from 'react'

import { DigitalWatchWrapper } from './DigitalWatch.styles'

export const DigitalWatch = () => {
    const [hour, setHour] = useState<string>('--:--:--')

    const fixZero = (time: number) => {
        return time < 10 ? `0${time}` : time
    }

    setInterval(() => {
        const currentTime = new Date()
        const hour = currentTime.getHours()
        const minute = currentTime.getMinutes()
        const second = currentTime.getSeconds()

        setHour(`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`)
    })

    return <DigitalWatchWrapper>{hour}</DigitalWatchWrapper>
}
