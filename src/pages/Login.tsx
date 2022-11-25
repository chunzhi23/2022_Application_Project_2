import React, { Component, ReactNode } from "react";
import {
  Link,
  NavigateFunction,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import StyledInput from "../components/StyledInput";
import LoginResult from "./LoginResult";

interface LoginProps {
  navigate: NavigateFunction;
}

interface LoginStates {
  username: string;
}

export default function Login() {
  const navigate = useNavigate();
  return <LoginPage navigate={navigate} />;
}

class LoginPage extends Component<LoginProps, LoginStates> {
  constructor(props: LoginProps | Readonly<LoginProps>) {
    super(props);

    this.state = {
      username: "Guest",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: e.target.value,
    });
  };

  render(): ReactNode {
    return (
      <>
        <h2>You are new here!</h2>
        <p>Please let me know how may I call you.</p>
        <p>
          <StyledInput
            id="styled-input"
            onChange={this.handleChange}
            onKeyDown={(e) => {
              e.key === "Enter"
                ? this.props.navigate(
                    `/login/success?name=${this.state.username}`
                  )
                : null;
            }}
          />
        </p>
        <Routes>
          <Route path="/success" element={<LoginResult />} />
        </Routes>
        <Link to="/">Go back</Link>
      </>
    );
  }
}
