import React from 'react';
import styles from '../../styles/components/button.module.scss'
import { Button as ButtonWrapper } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Button = ({ name, type }) => {
  return (
    <div>
      <ButtonWrapper
        className={`
        ${styles.button}
        ${type === 'secondary' ? styles.card_button : null}
       
      `} variant="contained">
        {name}
        <ArrowRightAltIcon
          className={`
          ${styles.button_icon}
          ${type === 'secondary' ? styles.small_button_icon : null}
         
        `}
        />
      </ButtonWrapper>
    </div>
  )
};

export default Button;
