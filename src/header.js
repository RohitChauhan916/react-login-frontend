import React, {Component} from 'react';

import './header.css';
import './bootstrap.min.css';

class Header extends Component {
  render() {
    return (
      <div class="sign_in">
      <form>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
    </div>
    )
  }
}

export default Header;