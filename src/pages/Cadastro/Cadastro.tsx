import "./cadastro.css";

export default function Cadastro() {
  return (
    <div>
      <body>
        <div className="container divCard justify-content-md-center card rounded-0 text-center font row">
          <img className="row  img-logo" src="src\img\logo.png" alt="" />
          <p className="logintext">LOGIN</p>
          <form>
            <div className="row justify-content-md-center  ">
              <input
                type="nome"
                placeholder="nome"
                className="form-control stilologin"
              />
            </div>
            <div className="row justify-content-md-center ">
              <input
                type="email"
                placeholder="email"
                className="form-control stilologin"
              />
            </div>
            <div className="row justify-content-md-center ">
              <input
                type="password"
                placeholder="senha"
                className="form-control stilologin "
              />
            </div>
            <div className="row justify-content-md-center ">
              <input
                type="password"
                placeholder="confirmar senha"
                className="form-control stilologin "
              />
            </div>
            <div className="row justify-content-md-center ">
              <input
                type="text"
                placeholder="unidade apartamento"
                className="form-control stilologin "
              />
            </div>
            <div className="row justify-content-md-center">
              <input
                type="text"
                placeholder="link da foto"
                className="form-control stilologin "
              />
            </div>
            <button type="submit" className=" row btn btnlogin">
              entrar
            </button>
          </form>
        </div>
      </body>
    </div>
  );
}
