import React from 'react';

export const MainHeader = () => {
  const date = new Date(),
    days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  return (
    <div className="prewiew-block center">
      <div className="main-logo">
      <h1>
           UcanDo_IT
      </h1>
      </div>
      <div className="now">
        <div className="date">
          <span>{`${
            days[date.getDay()]
          } . ${date.getDate()} ${date.toLocaleString('en', {
            month: 'long',
          })} . ${date.getFullYear()}`}</span>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%BD%D0%B5%D0%B2%D0%B4%D0%B0%D1%85-0255641b4/" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/usercaps" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://t.me/user_caps" className="social-link">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://www.instagram.com/sergeinevdah" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
