import React, { Component } from "react";
import "../css/Login.css";

export default class login extends Component {
  render() {
    return (
      <div>
        <div class="container" id="container">
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>ចូលគណនី</h1>
              {/* <div class="social-container">
                <a href="#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div> */}
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">ភ្លេចលេខកូដ?</a>
              <button className="Loginbutton">ចុចចូល</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>ស្វា​គម​ន៏​ការ​ត្រ​លប់​មក​វិញ!</h1>
                <p>
                ដើម្បីភ្ជាប់ទំនាក់ទំនងជាមួយពួកយើងសូមចូលជាមួយព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក
                </p>
                <button class="ghost" id="signIn">
                  ចូលគណនី
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>សួស្តី, មិត្តភក្តិ!</h1>
                <p>បញ្ចូលព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នកហើយចាប់ផ្តើមធ្វើដំណើរជាមួយយើង</p>
                <button className="Loginbutton2" id="signUp">
                  បង្កើតគណនី
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
