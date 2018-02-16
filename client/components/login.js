import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label htmlFor="user">UserName:</label>
                        <input type="text" className="form-control" id="user" placeholder="Enter User Name" name="user" />
    </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
    </div>
                                <button type="submit" className="btn btn-default">Submit</button>
  </form>
                        </div>
                        );
   }
}

export default Login;