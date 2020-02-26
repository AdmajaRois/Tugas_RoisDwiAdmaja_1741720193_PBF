import React from 'react';
import './content.css';


class Content extends React.Component {
    render() {
      return (
        <div align="center">
            <form>
                <div class="container">
                    <h2>Tugas Minggu Keempat</h2>
                    <div class="row">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Masukkan Username"></input>
                    </div>
                    <div class="row">
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Masukkan password"></input>
                    </div>
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" />
                            Remember Me
                        </label>
                    <div>
                        <button type="button" class="cancelbtn">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
      )
    };
}

export default Content;