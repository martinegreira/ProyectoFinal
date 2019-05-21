import { Component } from '@angular/core';

@Component({
  selector: 'sn-welcome',
  templateUrl: './welcome.component.html',
  styles: [
    `.bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  
  @media (min-width: 768px) {
      .bd-placeholder-img-lg {
          font-size: 3.5rem;
      }
  }
  
  .login{
    height: 100%;
  }
  
  .login{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 10%;
    padding-bottom: 40px;
  }
  
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: 20px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  #list-login {
    list-style-type:none;
  }
  
      }
    `
  ]
})
export class WelcomeComponent {
  isRegisterFormVisible = true;

  toggleForm(isRegisterClick) {
    this.isRegisterFormVisible = isRegisterClick;
  }
}
