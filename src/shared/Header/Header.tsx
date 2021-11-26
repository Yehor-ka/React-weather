import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import Select from 'react-select'

import s from './Header.module.scss'

interface Props {
    
}

export const Header = (props: Props) => {
    const [theme, setTheme] = React.useState<string>('light');
    const options = [
        { value: 'city-1', label: 'Киев' },
        { value: 'city-2', label: 'Харьков' },
        { value: 'city-3', label: 'Днепр' }
      ]

      const colorStyle = {
          control: (styles: any) => ({
              ...styles,
              backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
              width: '194px',
              height: '37px',
              border: 'none',
              borderRadius: '10px',
              zIndex: 100,
          }),
          singleValue: (styles: any) => ({
              ...styles,
              color: theme === 'dark' ? '#fff' : '#000'
          })
      }

      React.useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement;
        
        const components = ['--body-background-', '--components-background-', '--card-background-', '--card-shadow-', '--text-color-'];

        components.forEach((component) => {
            root.style.setProperty(`${component}default`, `var(${component}${theme})`)
        })
      }, [theme])

      const changeTheme = () => {
        setTheme(prevState => {
            return prevState === 'light' ? 'dark' : 'light';
        });

        
      }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo"/>
                </div>
                <div className={s.title}>React Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme"/>
                </div>
                <Select defaultValue={options[0]} styles={colorStyle} options={options} />
            </div>
        </header>
    )
}
