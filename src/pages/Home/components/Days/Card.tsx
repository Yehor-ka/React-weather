import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Day } from './Days'
import s from './Days.module.scss'

interface Props {
    day: Day;
}

export const Card = ({ day }: Props) => {
    const {day: dayI, day_info, icon_id, temp_day, temp_night, info} = day;
    return (
        <div className={s.card}>
            <div className={s.day}>{dayI}</div>
            <div className={s.day_info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.day_temp}>{temp_day}</div>
            <div className={s.night_temp}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    )
}
