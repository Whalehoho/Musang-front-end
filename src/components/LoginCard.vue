<template>
    <div class="frame">
      <div class="frame-wrapper">
        <div class="logo-wrapper">
          <img class="logo" alt="Logo" src="../../public/musang_logo.png" />
        </div>
      </div>
      <!-- <img class="line" alt="Line" src="line-1.png" /> -->
      <div class="div-wrapper">
        <div class="div">
          <div class="div-2">
            <div class="div-3">
              <div class="div-wrapper-2">
                <div class="text-wrapper">Musang.com</div>
              </div>
              <div class="div-4">
                <div class="div-5" />
                <div class="div-5" />
              </div>
            </div>
            <button class="button-login">
              <div class="text-wrapper-2">Login</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MainFrame",
  };
  </script>
  
  <style>
  .frame {
    align-items: center;
    background: linear-gradient(180deg, rgb(67.93, 175.31, 168.87) 34.38%, rgb(84.31, 219.94, 138.56) 100%);
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid;
    border-color: #000000;
    display: flex;
    gap: 20px;
    min-height: 100vh;
    padding: 16px 10px;
    position: relative;
  }
  
  .frame .frame-wrapper {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 63px;
    justify-content: center;
    padding: 20px 44px;
    position: relative;
  }
  
  .frame .logo-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    padding: 0px 0px 0px 1px;
    position: relative;
  }
  
  .frame .logo {
    height: 150px;
    object-fit: cover;
    position: relative;
    width: 235px;
  }
  
  .frame .line {
    align-self: stretch;
    object-fit: cover;
    position: relative;
    width: 1px;
  }
  
  .frame .div-wrapper {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 10px;
    justify-content: center;
    padding: 20px;
    position: relative;
  }
  
  .frame .div {
    align-items: center;
    align-self: stretch;
    background: linear-gradient(
      180deg,
      rgb(91.89, 198.69, 121.8) 0%,
      rgba(93.87, 195.35, 195.35, 0.93) 0.01%,
      rgba(119.06, 152.96, 240.12, 0) 100%
    );
    border-radius: 10px;
    box-shadow: 2px 4px 4px #00000040;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;
    justify-content: center;
    overflow: hidden;
    padding: 20px 25px;
    position: relative;
  }
  
  .frame .div-2 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 30px;
    justify-content: center;
    padding: 19px 21px;
    position: relative;
    width: 100%;
  }
  
  .frame .div-3 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    position: relative;
    width: 100%;
  }
  
  .frame .div-wrapper-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    padding: 0px 13px;
    position: relative;
    width: 100%;
  }
  
  .frame .text-wrapper {
    color: #000000;
    font-family: "Irish Grover-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 34px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 189px;
  }
  
  .frame .div-4 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 14px;
    justify-content: center;
    padding: 19px 20px;
    position: relative;
    width: 100%;
  }
  
  .frame .div-5 {
    align-self: stretch;
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 5px;
    height: 22px;
    position: relative;
    width: 100%;
  }
  
  .frame .button-login {
    all: unset;
    background-color: #62b6c1;
    border-radius: 10px;
    box-shadow: 2px 2px 4px #00000040;
    box-sizing: border-box;
    height: 57px;
    overflow: hidden;
    position: relative;
    width: 133px;
  }
  
  .frame .text-wrapper-2 {
    color: #000000;
    font-family: "Irish Grover-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 23px;
    left: 30px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 16px;
    white-space: nowrap;
    width: 73px;
  }

  </style>
  