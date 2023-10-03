import { useState } from 'react'

import { AnalogClockWrapper } from './AnalogClock.styles'
import { TimeProps } from './AnalogClock.types'

export const AnalogClock = () => {
    const [hour, setHour] = useState<number>(0)
    const [minute, setMinute] = useState<number>(0)
    const [second, setSecond] = useState<number>(0)

    const rotatePointersCalc = ({ deg, hour, minute, second }: TimeProps) => {
        const hourDeg = (360 / 12) * hour // Hora é dividida por 12 por que o relógio só tem 12 horas e não 24...
        const minuteDeg = minute * deg
        const secondDeg = second * deg

        setHour(hourDeg)
        setMinute(minuteDeg)
        setSecond(secondDeg)
    }

    setInterval(() => {
        const degreesPerSecond = 6
        const currentTime = new Date()
        const hourTime = currentTime.getHours()
        const minuteTime = currentTime.getMinutes()
        const secondTime = currentTime.getSeconds()

        rotatePointersCalc({
            deg: degreesPerSecond,
            hour: hourTime,
            minute: minuteTime,
            second: secondTime,
        })
    })

    return (
        <AnalogClockWrapper>
            <div className="pointer-hour" style={{ transform: `rotateZ(${hour}deg)` }} />
            <div className="pointer-minute" style={{ transform: `rotateZ(${minute}deg)` }} />
            <div className="pointer-second" style={{ transform: `rotateZ(${second}deg)` }} />
        </AnalogClockWrapper>
    )
}
