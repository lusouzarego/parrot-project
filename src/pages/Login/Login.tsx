import "./style.css";

export default function Login() {
  return (
    <body>
      <div className="container divCard justify-content-md-center card rounded-0 text-center font row">
        <img className="row  img-logo" src="src\img\logo.png" alt="" />
        <p className="logintext">LOGIN</p>
        <form>
          <div className="row justify-content-md-center mb-3 ">
            <input
              type="email"
              placeholder="email"
              className="form-control stilologin"
            />
          </div>
          <div className="row justify-content-md-center mb-3 ">
            <input
              type="password"
              placeholder="senha"
              className="form-control stilologin "
            />
          </div>
          <button type="submit" className=" row btn btnlogin"  id="btnlogin">
            entrar
          </button>
          <a
            className="row justify-content-md-center  alinha"
            href="/"
            id="link-cad"
          >
            cadastre-se
          </a>
        </form>
      </div>
    </body>
  );
}
